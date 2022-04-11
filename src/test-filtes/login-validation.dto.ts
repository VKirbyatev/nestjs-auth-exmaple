import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginValidationDto {
  @IsString()
  @Matches(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]/, {
    message: 'not valid email address ',
  })
  login: string;

  @IsString()
  @MaxLength(10, {
    message: 'Password is too long',
  })
  @MinLength(3, {
    message: 'Password is too short',
  })
  password: string;
}
