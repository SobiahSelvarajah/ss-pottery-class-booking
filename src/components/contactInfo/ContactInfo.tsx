import ContactInfoIntro from "../contactInfoIntro/ContactInfoIntro"
import ContactInfoContent from "../contactInfoContent/ContactInfoContent"

export default function ContactInfo() {
    return (
        <div className="space-y-8">
            <ContactInfoIntro />
            <ContactInfoContent />
        </div>
    )
}