import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropDownOpened = false;

  @ViewChild('header') header: ElementRef;
  @ViewChild('dropdown') dropdown: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(ev) {
    if (window.scrollY > 1) {
      this.renderer.addClass(this.header.nativeElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.header.nativeElement, 'scrolled');
    }
  }

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  openDropDown() {
    this.renderer.addClass(this.dropdown.nativeElement, 'opened');
    this.dropDownOpened = true;
  }

  closeDropDown() {
    this.renderer.removeClass(this.dropdown.nativeElement, 'opened');
    this.dropDownOpened = false;
  }
}
