import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFreeContentComponent } from './post-free-content.component';

describe('PostFreeContentComponent', () => {
  let component: PostFreeContentComponent;
  let fixture: ComponentFixture<PostFreeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFreeContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFreeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
