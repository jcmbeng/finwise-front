import {Component, inject, TemplateRef} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-user-list',
  imports: [
     NgIcon
  ],
  templateUrl: './document-user-list.html',
  styleUrl: './document-user-list.scss'
})
export class DocumentUserList {
   private modalService = inject(NgbModal);
  
      openRoleModal(content: TemplateRef<any>) {
          this.modalService.open(content, {size: 'lg'});
      }

}
