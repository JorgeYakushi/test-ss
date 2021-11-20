import { render, fireEvent } from '@testing-library/vue'
import Hero from '../components/Hero.vue'
describe('LightBlueButton', () => {
  test('writes in console', async () => {
    const { getByTestId } = render(Hero)
    const btn = getByTestId('BEST SELLERS')
    await fireEvent.click(btn)
  })
})
