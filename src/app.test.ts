// test/imports.test.ts
describe("Module Imports", () => {
  it("should import routerAuth correctly", () => {
    const authImport = import("./routes/auth/route");
    expect(authImport).resolves.toBeDefined();
  });

  it("should import routerCollaborator correctly", () => {
    const collaboratorImport = import(
      "./routes/Collaborator/route"
    );
    expect(collaboratorImport).resolves.toBeDefined();
  });
});
