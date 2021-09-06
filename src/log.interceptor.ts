
import { NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable} from 'rxjs';
import {  tap } from 'rxjs/operators';

export class LoggingInterceptor implements NestInterceptor {
    private logger: Logger = new Logger(LoggingInterceptor.name)
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    this.logger.setContext(context.getClass().name)    
    
    return next
      .handle()
      .pipe(
        tap(() =>{this.logger.log('An event has occurred')},(err)=>this.logger.error(`something bad happened : ${err.message}`)),
      );
  }
}