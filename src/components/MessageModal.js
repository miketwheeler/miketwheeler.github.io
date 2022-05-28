import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
	FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, 
	Button, Box, Typography, FilledInput, InputLabel, Modal, TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import sGSendEmail from '../hooks/SGSendEmail.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../hooks/theme';
import NumberFormat from 'react-number-format';
import DOMPurify from 'dompurify';



// Styles and Fixes to mui Sys Styles
const mainColor = '#FFBC28';
const secondaryColor = '#2b2b2b';
const darkerGrey = '#282829';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '52%',
	maxWidth: '600px',
	minWidth: '270px',
	bgcolor: secondaryColor,
	boxShadow: 24,
	color: 'white',
	pl: 4,
	pr: 6,
	py: 8,
	borderRadius: 3,
	zIndex: 100,
	'@media(max-height: 890px)': {
		top: '0',
		transform: 'translate(-50%, 0%)'
	}
};
const fancyButtonStyle = {
	backgroundColor: 'transparent',
	color: mainColor,
	border: `1px solid ${mainColor}`,
	float: 'right'
};
const sxLableStyle = { color: mainColor };
const sxControlStyle = { margin:1, width: '100%', color: mainColor, backgroundColor: darkerGrey };
const muiFieldStyle = {
	'& .MuiFilledInput-input': { // mainly for autofilled content - its standalone stylings are set separately
		color: 'white',
		backgroundColor: darkerGrey,
		'&:-webkit-autofill': {
			'-webkit-box-shadow': `0 0 10px 100px ${darkerGrey} inset`,
			'-webkit-text-fill-color': 'white',
		}
	},
	'& input:valid + fieldset': { // issue with bg color 
		backgroundColor: darkerGrey
	},
	'& input:invalid + fieldset': { // invalids get red
		borderColor: 'red',
		color: 'red',
	},
	'& .MuiInputLabel-root': { // the lable for the input - style
		color: mainColor,
	},
	'& .MuiInputLabel-root:invalid': {
		color: 'red',
	},
};
const modalTypographyTitle = { fontWeight: 'bolder', color: mainColor, ml: 2 };
const modalTypographyDescription = { mt: 2, mb: 2, ml: 2, color: mainColor };
const xButtonStyle = { float: 'right', color: mainColor, p:0, m: 0, height: '30px', width: '30px' };
const radioContainer = { width: '88%', margin: '8px auto 12px', justifyContent: 'space-between' };
const radiobutton = { padding: '0px 30px', color: mainColor };
const radioFormLabel = { color: mainColor, ml: 2 };

const MyTextField = styled(TextField)(muiFieldStyle);
const MyNumberField = styled(NumberFormat)(muiFieldStyle);

// common attributes across most of the fields - needed space 
function CustomTextField({...props}) {
	return (
		<>
			<MyTextField
				aria-label={() => props.n.toLowerCase() +"-input-field"}
				value={() => props.n.toLowerCase()}
				required
				fullWidth
				color="info"
				variant='filled'
				sx={sxControlStyle}
				{...props}
			/>
		</>
	)
}

///////////////////////////////////////////////////////////////////
// THE MESSAGE-MODAL COMPONENT
///////////////////////////////////////////////////////////////////
const MessageModal = () => {
	const [open, setOpen] = useState(false);
	const [checkVals, setCheckVals] = useState({
		name: { value: "", message: "Please provide a valid Name" },
		title: { value: "", message: "Please provide a valid Title" },
		phone: { value: "", message: "Please provide a valid Phone Number" },
		email: { value: "", message: "Please provide a valid Email" },
	});
	const [message, setMessage] = useState("");
	const [radioSelectionValue, setRadioSelectionValue] = useState('yes');
	const [isError, setIsError] = useState(false);
	const docLabel = document.querySelector('.Mui-error');

	const reNormString = /^([^0-9]*)$/;
	const rePhone = /[0-9]/g;
	const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const reMessage = /([\n\r\t])/g;

	///////////////////////////////////////////////////////////////////
	// Field Integrity Checks - format/regex filters 
	// - @returns boolean error status on the field value, also sets that field's error attr to true if error true 
	///////////////////////////////////////////////////////////////////
	const vetInputs = (xIn) => {
		let checkX = checkVals[xIn].value;
		if(checkX) {
			if(xIn === 'email') {
				if(checkX.length > 0 && !reEmail.test(checkX)) {
					return true;
				}
				else return false;
			}
			if(xIn === 'phone') {
				if(checkX.match(rePhone).length > 0 && checkX.match(rePhone).length <= 10) {
					return true;
				}
				else return false;
			}
			else {
				if((checkX.length > 0 && checkX.length <= 2) || !reNormString.test(checkX)) {
					return true;
				}
				else return false;
			}
		}
		else return null;
	}

	///////////////////////////////////////////////////////////////////
	/// Form Submittion & Resets
	///////////////////////////////////////////////////////////////////
	const handleChange = (e) => {
		const {id, value} = e.target;
		if(checkVals) {
			setCheckVals({
				...checkVals,
				[id]: {
					...checkVals[id],
					value
				}
			})
		}
	}
	// slight abuse of useEffect, only way concieved to track a document-error loosly in general
	// 		much simpler than other methods - tradeoffs outweighed, this prevails
	useEffect(() =>{
		docLabel !== undefined && docLabel ? setIsError(true) : setIsError(false);
		console.log(isError);
	}, [docLabel, isError])

	function resetForm() {
		Object.defineProperties(checkVals, {
			name: { value: "" },
			title: { value: "" },
			email: { value: "" },
			phone: { value: "" }
		})
		setIsError(false);
		setRadioSelectionValue('yes');
		setMessage('');
	}
	function cancelModal() {
		setOpen(false);
		resetForm();
	}
	function closeAndSubmit(event) {
		event.preventDefault();
		const messageRemovedDelimiters = message.replace(reMessage, " ");
		let cleanData = [];
		const dirtyData = [
			checkVals.name.value, 
			checkVals.title.value, 
			checkVals.phone.value, 
			checkVals.email.value, 
			radioSelectionValue, 
			messageRemovedDelimiters
		];
		dirtyData.forEach(item => cleanData.push(DOMPurify.sanitize(item)));
		(
			async() => {
				try {
					await sGSendEmail(...cleanData)
				} 
				catch(err) {
					console.log("There was an error: ", err)
				}
			}
		)();
		cancelModal();
	}


	return (
		<div>
			<ThemeProvider theme={theme}>
				{/* Main invocation button to bring up contact modal - use anywhere & standalone state */}
				<Button sx={fancyButtonStyle} endIcon={<EmailIcon />} onClick={() => setOpen(true)}>
					<Typography>
						Contact
					</Typography>
				</Button>
				{/* The MessageModal */}
				<Modal 
					open={open} 
					onClose={() => setOpen(false)} 
					aria-labelledby="modal-title" 
					aria-describedby="modal-description" 
					disableScrollLock={false} 
					sx={{
						overflowY: 'scroll', 
					}}
					>
					<Box sx={style} component="form" id="form" onSubmit={closeAndSubmit}>
						<Typography id="modal-title" sx={modalTypographyTitle} variant="h5" component="h2">
							Contact Me
							<Button 
								variant="text"
								sx={xButtonStyle}
								size="large"
								fontSize="large"
								onClick={cancelModal}
								endIcon={<CloseIcon />}
							/>
						</Typography>
						<Typography id="modal-description" sx={modalTypographyDescription}>
							<strong>Please fill out the form below, I'll get back with you soon!</strong>
						</Typography>
						{/* Name, Email, PhoneNumber, TItle */}
						<div style={{marginBottom: '30px'}}>
							<CustomTextField 
								id="name"
								value={checkVals.name.value}
								label="Full Name"
								onChange={handleChange}
								error={vetInputs('name')}
								helperText={vetInputs('name') ? checkVals.name.message : null}
								/>
							<CustomTextField 
								id="title"
								value={checkVals.title.value}
								label="Title"
								onChange={handleChange}
								error={vetInputs('title')}
								helperText={vetInputs('title') ? checkVals.title.message : null}
								/>
							<MyNumberField
								id='phone'
								type='textfield'
								label="Phone Number"
								sx={sxControlStyle}
								value={checkVals.phone.value}
								// autoComplete
								required
								fullWidth
								color='info'
								variant="filled"
								customInput={TextField}
								format="+1 (###) ###-####"
								mask="_"
								onChange={handleChange}
								error={vetInputs('phone')}
								helperText={vetInputs('phone') ? checkVals.phone.message : null}
							/>
							<CustomTextField 
								id="email"
								value={checkVals.email.value}
								label="Email"
								onChange={handleChange}
								error={vetInputs('email')}
								helperText={vetInputs('email') ? checkVals.email.message : null}
								/>
							{/* Send Resume Y/N? */}
							<FormControl aria-label="radio-list-send-resume" margin="normal" fullWidth>
								<FormLabel 
									aria-label="subject-radio-resume-selection" 
									color="info"
									sx={radioFormLabel}
									>
										Can I send a copy of my Resum&eacute; to this Email?
								</FormLabel>
								<RadioGroup 
									row 
									aria-label="select-radio-buttons-resume" 
									defaultValue={radioSelectionValue}
									name="currentSelection" 
									value={radioSelectionValue} 
									onChange={(e) => setRadioSelectionValue(e.target.value)}
									sx={radioContainer}
									>
									<FormControlLabel 
										value="yes" 
										control={<Radio color="info" sx={{color: theme.palette.secondary.main}} />} 
										label="Yes"
										labelPlacement="start"
										sx={radiobutton}
										/>
									<FormControlLabel 
										value="no" 
										control={<Radio color="info" sx={{color: theme.palette.secondary.main}} />} 
										label="No"
										labelPlacement="start"
										sx={radiobutton}
										/>
								</RadioGroup>
							</FormControl>
							{/* Message */}
							<FormControl variant="filled" color="info"  sx={sxControlStyle}>
								<InputLabel htmlFor="phone-label"color="info" sx={sxLableStyle}>Message</InputLabel>
								<FilledInput 
									id='message'
									multiline
									fullWidth
									rows={3} 
									value={message} 
									sx={muiFieldStyle} 
									onChange={(event) => setMessage(event.target.value)} 
									/>
							</FormControl>
						</div>
						{/* Submit Button */}
						<Button 
							type="submit"
							variant="contained"
							sx={fancyButtonStyle}
							disabled={isError}
							endIcon={<EmailIcon />}
							>
							Send It
						</Button>
						
					</Box>
				</Modal>
			</ThemeProvider>
		</div>
	);
}

export default MessageModal;