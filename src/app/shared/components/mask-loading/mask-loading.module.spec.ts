import { MaskLoadingModule } from './mask-loading.module';

describe('MaskLoadingModule', () => {
  let maskLoadingModule: MaskLoadingModule;

  beforeEach(() => {
    maskLoadingModule = new MaskLoadingModule();
  });

  it('should create an instance', () => {
    expect(maskLoadingModule).toBeTruthy();
  });
});
