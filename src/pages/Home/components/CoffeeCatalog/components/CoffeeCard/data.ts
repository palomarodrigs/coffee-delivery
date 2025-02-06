import Express from '../../../../../../assets/express-coffee.png'
import American from '../../../../../../assets/american-coffee.png'
import CreamyExpress from '../../../../../../assets/express-creamy-coffee.png'
import IcedCoffee from '../../../../../../assets/iced-coffee.png'
import CoffeWithMilk from '../../../../../../assets/coffee-with-milk.png'
import Latte from '../../../../../../assets/latte.png'
import Cappuccino from '../../../../../../assets/cappuccino.png'
import Macchiato from '../../../../../../assets/macchiato.png'
import Mochaccino from '../../../../../../assets/mochaccino.png'
import HotChocolate from '../../../../../../assets/hot-chocolate.png'
import Cuban from '../../../../../../assets/cuban-coffee.png'
import Hawaiian from '../../../../../../assets/hawaiian-coffee.png'
import Arabic from '../../../../../../assets/arabic-coffee.png'
import Irish from '../../../../../../assets/irish-coffee.png'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    image: Express,
    tags: ['Tradicional', 'Especial'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    image: American,
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    image: CreamyExpress,
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    image: IcedCoffee,
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    name: 'Café com Leite',
    image: CoffeWithMilk,
    tags: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    name: 'Latte',
    image: Latte,
    tags: ['Tradicional', 'Com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    name: 'Capuccino',
    image: Cappuccino,
    tags: ['Tradicional', 'Com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    name: 'Macchiato',
    image: Macchiato,
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    name: 'Mocaccino',
    image: Mochaccino,
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    image: HotChocolate,
    tags: ['Tradicional', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    name: 'Cubano',
    image: Cuban,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    name: 'Havaiano',
    image: Hawaiian,
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    name: 'Árabe',
    image: Arabic,
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    name: 'Irlandês',
    image: Irish,
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
