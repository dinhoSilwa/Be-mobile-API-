// test/imports.test.ts
describe("Module Imports", () => {
  it("should import routerAuth correctly", () => {
    const authImport = import("./Routes/auth/authRouter");
    expect(authImport).resolves.toBeDefined();
  });

  it("should import routerCollaborator correctly", () => {
    const collaboratorImport = import(
      "./Routes/Collaborator/collaboratorRouter"
    );
    expect(collaboratorImport).resolves.toBeDefined();
  });
});
