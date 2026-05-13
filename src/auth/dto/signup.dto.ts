import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  organizationName!: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;
}
