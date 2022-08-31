import SidebarLayout from "components/layout/SidebarLayout";
import EntryZero from "components/EntryZero";
import EntryListNav from "components/EntryListNav";

export default function WorkspacePage() {
    return (
        <SidebarLayout nav={<EntryListNav />}>
            <EntryZero />
        </SidebarLayout>
    )
}