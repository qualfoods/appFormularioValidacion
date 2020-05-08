import { AppFormularioValidacionPage } from './app.po';

describe('app-formulario-validacion App', () => {
  let page: AppFormularioValidacionPage;

  beforeEach(() => {
    page = new AppFormularioValidacionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
