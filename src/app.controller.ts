import { Body, Controller, Get,Post,Render } from '@nestjs/common';
import { AgentsService } from './agents/agents.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly agentService : AgentsService
  ) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }


  @Get("/apercu-dmde")
  @Render("apercu-dmde")
  async voirDemande(){
    return;
  }

  @Get("/inscription")
  @Render('inscription')
  async inscription(){

  }

  @Get("/resultats")
  @Render('resultats')
  async resultats(){
    return;
  }

  @Post("/inscription")
  @Render('inscription')
  async faireUneDemande(@Body() payload){
    return await  this.agentService.registerAgent(payload)
  }



  @Get("/connexion")
  @Render('connexion')
  async connexion(){

  }
}
