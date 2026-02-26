import { Html, Body, Container, Heading, Text, Hr, Preview } from "@react-email/components";


// defining props interface
interface ContactConfirmationProps {
    name: string;
};


export default function ContactConfirmation({
    name,
}: ContactConfirmationProps) {
    return (
        // email structure
        <Html>
            <Preview>
                We have received your message.
            </Preview>
            <Body style={{ 
                    fontFamily: "Arial, sans-serif", 
                    backgroundColor: "#f6f6f6"}}>
                <Container
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "24px",
                        borderRadius: "8px"}}
>
                    <Heading>
                        Hi {name},
                    </Heading>
                    <Text>
                        Thank you for reaching out to us! 
                        We will review your message and 
                        will get back to you as soon 
                        as possible.
                    </Text>
                    <Hr />
                    <Text style={{ 
                            fontSize: "14px", 
                            color: "#666" }}>
                            — The Pottery Studio Team
                    </Text>
                </Container>
            </Body>
        </Html>
    )
};