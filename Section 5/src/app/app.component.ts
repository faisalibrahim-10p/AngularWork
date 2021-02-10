import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'server1',content:'just a server'}];

  onServerAdded(serverElement:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverElement.serverName,
      content: serverElement.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
}
}
