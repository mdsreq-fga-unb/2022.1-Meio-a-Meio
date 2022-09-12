import { Administrador } from './../administrador/administrador.entity';
import { AdministradorService } from '../administrador/administrador.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private admService: AdministradorService,
    private jwtService: JwtService,
  ) { }

  async validarUsuario(username: string, pass: string): Promise<any> {
    const adm = await this.admService.findByEmail(username);
    if (adm && bcrypt.compareSync(pass, adm.password)) {
      const { password, ...result } = adm;
      return result;
    }
    return null;
  }

  async login(adm: any) {
    const payload = { username: adm.email, sub: adm.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
