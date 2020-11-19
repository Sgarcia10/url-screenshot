import { IsNotEmpty } from 'class-validator';

export class ScreenshotCreateRequestDto {
  @IsNotEmpty()
  url: string;
}
