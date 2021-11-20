import { render, fireEvent } from '@testing-library/vue'
import App from '../pages/index.vue'
describe('LightBlueButton', () => {
  test('writes in console', async () => {
    const { getByTestId } = render(App)
    const btn = getByTestId('BEST SELLERS')
    await fireEvent.click(btn)
  })
})
