import { IsString, MinLength, MaxLength, Validate } from "class-validator";
import { PasswordValidation, PasswordValidationRequirement } from 'class-validator-password-check'
import { PessoaDto } from "../../pessoa/dto/pessoa.dto";

var passwordRequirement: PasswordValidationRequirement = {
    mustContainLowerLetter: true,
    mustContainNumber: true,
    mustContainSpecialCharacter: true,
    mustContainUpperLetter: true
}

export class CreateAdmDto extends PessoaDto {
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Validate(PasswordValidation, [passwordRequirement])
    readonly password: string;
}