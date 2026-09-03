import ContactInfoIntro from "./ContactInfoIntro"
import ContactInfoContent from "./ContactInfoContent"


export default function ContactInfo() {
    return (
        <div className="space-y-8">
            <ContactInfoIntro />
            <ContactInfoContent />
        </div>
    )
}