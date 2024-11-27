"use client";

import { useGetWorkspace } from "../../../features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const { isLoading, data } = useGetWorkspace({ id: workspaceId });
  return (
    <div>
      <h1 className="text-lg text-sky-500">
        Workspace ID PAGE... {JSON.stringify(data)}
      </h1>
    </div>
  );
};

export default WorkspaceIdPage;
 