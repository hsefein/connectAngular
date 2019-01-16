import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExternalConfigurationHandlerInterface, ExternalConfiguration} from 'angular4-hal';


@Injectable()
export class ExternalConfigurationService implements ExternalConfigurationHandlerInterface {

  getProxyUri(): string {
    return null;
  }

  getRootUri(): string {
    return 'http://localhost:8080';
  }

  getHttp(): HttpClient {
    return this.http;
  }

  constructor(private http: HttpClient) {
  }

  getExternalConfiguration(): ExternalConfiguration {
    return null;
  }

  setExternalConfiguration(externalConfiguration: ExternalConfiguration) {
  }

  deserialize(): any {
  }

  serialize(): any {
  }
}
