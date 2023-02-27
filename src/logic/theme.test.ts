import { Theme, themes } from "./theme";

describe("Theme class", () => {
  it("constructor sets properties correctly", () => {
    const theme = new Theme({
      primary: "#ffffff",
      secondary: "#000000",
      primaryAccent: "#ff0000",
      secondaryAccent: "#00ff00",
      background: "#0000ff",
      name: "Test theme",
    });

    expect(theme.primary).toBe("#ffffff");
    expect(theme.secondary).toBe("#000000");
    expect(theme.primaryAccent).toBe("#ff0000");
    expect(theme.secondaryAccent).toBe("#00ff00");
    expect(theme.background).toBe("#0000ff");
    expect(theme.name).toBe("Test theme");
  });

  it("CSS method returns valid CSS string", () => {
    const theme = new Theme({
      primary: "#ffffff",
      secondary: "#000000",
      primaryAccent: "#ff0000",
      secondaryAccent: "#00ff00",
      background: "#0000ff",
      name: "Test theme",
    });

    const expectedCSS =
      "--primary: #ffffff; --secondary: #000000; --primaryAccent: #ff0000; --secondaryAccent: #00ff00; --background: #0000ff";
    expect(theme.CSS()).toBe(expectedCSS);
  });
});

describe("themes array", () => {
  it("contains at least one theme", () => {
    expect(themes.length).toBeGreaterThan(0);
  });

  it("all themes have valid properties", () => {
    for (const theme of themes) {
      expect(theme.primary).toMatch(/^#[0-9A-F]{6}$/i);
      expect(theme.secondary).toMatch(/^#[0-9A-F]{6}$/i);
      expect(theme.primaryAccent).toMatch(/^#[0-9A-F]{6}$/i);
      expect(theme.secondaryAccent).toMatch(/^#[0-9A-F]{6}$/i);
      expect(theme.background).toMatch(/^#[0-9A-F]{6}$/i);
      expect(theme.name).toBeDefined();
    }
  });
});
