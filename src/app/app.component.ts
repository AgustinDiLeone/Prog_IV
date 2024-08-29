import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prog_IV';

  edadUno: number | undefined; 
  edadDos: number | undefined;

  mostrarDatos() {

    const miDiv = document.getElementById('resultado')!;
    if(this.verificarDatos()){
      const numEdadUno = Number(this.edadUno);
      const numEdadDos = Number(this.edadDos);

      const suma: number = numEdadUno + numEdadDos;
      const promedio: number = suma / 2;

      // Inserta los resultados en el div
      miDiv.innerHTML = ` <p>
                            <label for="suma">Suma:</label>
                            <input type="text" id="suma" value="${suma}" readonly>
                          </p>
                          <p>
                            <label for="promedio">Promedia:</label>
                            <input type="text" id="promedio" value="${promedio}" readonly>
                          </p>`;
    }else{
      miDiv.innerHTML = `<p>Ingrese edades validas</p>`;
    }
  }
  verificarDatos() {
    if(this.edadUno == undefined || this.edadDos == undefined){
      return false;
    }else{
      return true;
    }
  }
  limpiarDatos() {
    const miDiv = document.getElementById('resultado')!;
    miDiv.innerHTML = "";

    this.edadUno = undefined; 
    this.edadDos = undefined;
  }

}
