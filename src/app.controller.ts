import { Controller, Get } from '@nestjs/common';
import { AuthGuard, RolesGuard } from '@unistory/nestjs-auth';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Single controller may be decorate with
  // @AuthGuard() for basic JWT secure

  // Use @RolesGuard('Role1', 'Role2'....) for roles authentication
  // In that case Payload class should be pass and has role property
  @Get()
  @AuthGuard()
  @RolesGuard('Admin', 'SomeRole')
  getHello(): string {
    return this.appService.getHello();
  }
}
