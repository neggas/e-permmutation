import { Injectable } from '@nestjs/common';


@Injectable()
export class DemandesService {
  create(createDemandeDto) {
    return 'This action adds a new demande';
  }

  findAll() {
    return `This action returns all demandes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demande`;
  }

  update(id: number, updateDemandeDto) {
    return `This action updates a #${id} demande`;
  }

  remove(id: number) {
    return `This action removes a #${id} demande`;
  }
}
