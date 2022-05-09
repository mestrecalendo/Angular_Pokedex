import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { SearchComponent } from './search/search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [PokeHeaderComponent, SearchComponent, PokeListComponent],
  exports: [PokeHeaderComponent, PokeListComponent, SearchComponent],
  imports: [CommonModule,RouterModule],
})
export class SharedModule {}
