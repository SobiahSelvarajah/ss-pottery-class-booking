import { Html, Body, Container, Heading, Text, Hr, Preview } from "@react-email/components";


// defining props interface
interface ContactConfirmationProps {
    name: string;
};

// reusable styling objects
const bodyStyle = {
    fontFamily: "Ariel, sans-serif",
    backgroundColor: "#F6F6F6"
};
const containerStyle = {
    backgroundColor: "#FFFFFF",
    padding: "1.5rem",
    borderRadius: "8px"
};
const spacingBottom = {
    marginBottom: "2rem"
};
const footerStyle = {
    fontSize: "14px",
    color: "#666",
    paddingTop: "2rem"
};


export default function ContactConfirmation({
    name,
}: ContactConfirmationProps) {
    return (
        // email structure
        <Html>
            <Preview>
                Thank you for reaching out to 
                us with your enquiry.  
            </Preview>
            <Body style={bodyStyle}>
                <Container style={containerStyle}>
                    <Heading style={spacingBottom}>
                        Hi {name},
                    </Heading>
                    <Text style={spacingBottom}>
                        Thank you for reaching out to us! 
                        We will review your message and 
                        will get back to you as soon 
                        as possible.
                    </Text>
                    <Hr />
                    <Text style={footerStyle}>
                            — The Pottery Studio Team
                    </Text>
                </Container>
            </Body>
        </Html>
    )
};