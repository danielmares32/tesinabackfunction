import {IsEmail, IsNotEmpty, IsNumber, IsNumberString, MinLength} from 'class-validator';

export class UsuariosDTO{
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @MinLength(10)
    password:string;

    @IsNotEmpty()
    @MinLength(3)
    nombre:string;
    
    @IsNotEmpty()
    @MinLength(10)
    telefono:string;
    
    @IsNotEmpty()
    calle:string;
    
    
    @IsNumber()
    numero:number;
    
    @IsNumberString()
    cp:number;
    
}