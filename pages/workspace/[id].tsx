import SidebarLayout from "components/layout/SidebarLayout";
import Workspace from "components/Workspace";
import EntryListNav from "components/EntryListNav";

export default function WorkspaceEntryPage() {
    return (
        <SidebarLayout nav={<EntryListNav />}>
            <Workspace />
        </SidebarLayout>
    )
}