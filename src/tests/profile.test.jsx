import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { render, screen } from "../test-utils/render";
import { profileStoreTest } from "../test-utils/store";
// const store = profileStoreTest
describe("pruebas para el calendario en la página de Perfil", () => {
  test('Mostrar calendario de citas', () => {
    // renderizamos el componente
    render(<ProfileScreen />, profileStoreTest)
    /**
     * Para verificar que el calendario se muestra en la web del perfil:
     * - Verificar que la tabla del calendario exista
     * - Verificar que esa tabla ha sido creada mediante la clase que coloca Ant Design (ant-picker-content)
     */
    const calendarTable = screen.getByRole('table')
    expect(calendarTable).toHaveClass('ant-picker-content')
  })

  test('Mostrar indicadores de alguna cita en el calendario', async() => {
    render(<ProfileScreen />, profileStoreTest)

    /**
     * Para validar que hay una cita en el calendario,
     * verificamos que exista algún button que contenga la palabra "Cita" en el calendario
     */
    await waitFor(async () => {
      const appointmentButton = screen.getByRole('button', {name: /Cita/i})
      expect(appointmentButton).toBeInTheDocument()
    })
  })

  test.only('Mostrar la información de la cita seleccionada', async () => {
    // renderizamos el componente
    render(<ProfileScreen />, profileStoreTest)
    // encontramos un button en el calendario que tenga el texto de "Cita"
    const appointmentButton = await screen.findByRole('button', {name: /Cita/i})
    expect(appointmentButton).toBeInTheDocument()
    
    // hacemos hover sobre el button para que aparezca la lista de items
    userEvent.hover(appointmentButton)
    // verificamos que una vez sucede el hover, se muestra el item de la sesión
    // en este caso validamos que el texto sea el mismo que viene del mock
    const item = await screen.findByText(/Paquete: SESION - Tema: Depresión/i)
    expect(item).toBeInTheDocument()
  })
});
