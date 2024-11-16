interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return (
    <div>
      <h1 className="text-lg text-sky-500">
        Workspace ID PAGE {params?.workspaceId}
      </h1>
    </div>
  );
};

export default WorkspaceIdPage;
