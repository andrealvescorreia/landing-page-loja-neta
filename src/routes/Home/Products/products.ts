// Importações femininas
import Calcinha from '../../../assets/products/fem/calcinha.jpg'
import CalcinhaSutia from '../../../assets/products/fem/sutia-calcinha.jpg'
import CalcaPreta from '../../../assets/products/fem/calca-preta.jpg'
import CalcaBranca from '../../../assets/products/fem/calca-branca.jpg'
import Calca from '../../../assets/products/fem/calca.png'
import Blusa from '../../../assets/products/fem/blusa.jpg'
import Camisola from '../../../assets/products/fem/camisola.jpeg'
import Regata from '../../../assets/products/fem/regata.jpg'
import Vestido from '../../../assets/products/fem/vestido.jpg'

// Importações masculinas
import Bermuda from '../../../assets/products/masc/bermuda.jpg'
import CamisaGolaCareca from '../../../assets/products/masc/camisa-gola-careca.jpg'
import CamisaGola from '../../../assets/products/masc/camisa-gola.jpg'
import Carteira from '../../../assets/products/masc/carteira.jpg'
import CuecaBoxZitton from '../../../assets/products/masc/cueca-box-zitton.jpg'
import ShortTactel from '../../../assets/products/masc/short-tactel.jpg'

// Importações kids
import Boneca from '../../../assets/products/kids/boneca.jpg'
import Bore from '../../../assets/products/kids/bore.jpeg'
import Brinquedo from '../../../assets/products/kids/brinquedo.jpeg'
import CamisaMascMarands from '../../../assets/products/kids/camisa-masc-marands.jpg'
import CamisaMascMarEDia from '../../../assets/products/kids/camisa-masc-mar-e-dia.jpg'
import ConjuntoFem from '../../../assets/products/kids/conjunto-fem.jpg'
import ConjuntoMasc from '../../../assets/products/kids/conjunto-masc.jpg'
import CuecaBoxZittonKids from '../../../assets/products/kids/cueca-box-zitton.jpg'
import ShortMoletonFem from '../../../assets/products/kids/short-moletom-fem.jpg'

// Importações house
import CapaDeAlmofada from '../../../assets/products/house/capa-de-almofada.jpg'
import Colcha from '../../../assets/products/house/colcha.jpg'
import ConjuntoCozinhaTecidoOxford from '../../../assets/products/house/Conjunto de Cozinha Tecido Oxford.jpg'
import ConjuntoBanheiro from '../../../assets/products/house/conjunto-banheiro.jpg'
import Cortina from '../../../assets/products/house/cortina.jpg'
import JogoDeToalhas from '../../../assets/products/house/jogo-de-toalhas.jpg'
import MantaSofa from '../../../assets/products/house/manta-sofa.jpg'
import Tapete from '../../../assets/products/house/tapete.jpg'
import ToalhaDeBanho from '../../../assets/products/house/toalha-de-banho.jpg'
import ToalhaDeRosto from '../../../assets/products/house/toalha-de-rosto.jpg'
import Travesseiro from '../../../assets/products/house/travesseiro.jpg'

// Importações cosmetics
import CaixaSabonetes from '../../../assets/products/cosmetics/caixa-sabonetes.jpg'
import Creme from '../../../assets/products/cosmetics/creme.jpg'
import Desodorante from '../../../assets/products/cosmetics/desodorante.jpg'

import type { CategoryType } from './categories'
import type { ProductCardProps } from '../../../components/ProductCard'

interface ProductCategoryData {
  category: CategoryType;
  products: ProductCardProps[];
}

export type ProductsByCategoryType = ProductCategoryData[];

export const productsByCategory: ProductsByCategoryType = [
  {
    category: "Moda Feminina",
    products: [
      {
        img: Calca,
        title: "Calça Skinny Jeans – Adágio",
        description: "97% algodão 3% elastano",
      },

      {
        img: CalcaPreta,
        title: "Calça Skinny Preta – Adágio",
        description: "97% algodão 3% elastano"
      },
      {
        img: Regata,
        title: "Regata Cotton Decote U – Malwee",
        description: ""
      },
      {
        img: Blusa,
        title: "Blusa com Lycra – Malwee",
        description: ""
      },
      {
        img: CalcaBranca,
        title: "Calça Skinny Branca – Adágio",
        description: "97% algodão 3% elastano"
      },
      {
        img: Camisola,
        title: "Camisola",
        description: "96% poliester 4% elastano"
      },
      {
        img: CalcinhaSutia,
        title: "Conjunto Calcinha e Sutiã – Pretty Patty",
        description: "Sem bojo com arco",
      },
      {
        img: Calcinha,
        title: "Calçinha – Corpo Colado",
        description: "96% algodão 4% elastano"
      },
      {
        img: Vestido,
        title: "Vestido",
        description: "95% viscose 5% elastano"
      },
    ]
  },
  {
    category: "Moda Masculina",
    products: [
      {
        img: CamisaGola,
        title: "Camisa Polo – Ditongo",
        description: ""
      },
      {
        img: CamisaGolaCareca,
        title: "Camisa Gola Careca",
        description: ""
      },
      {
        img: Bermuda,
        title: "Bermuda com Lycra",
        description: "98% algodão 2% elastano"
      },
      {
        img: CuecaBoxZitton,
        title: "Cueca Boxer – Zitton",
        description: "91% poliamida 9% elastano"
      },
      {
        img: ShortTactel,
        title: "Short Tactel Esportivo",
        description: "Malha fria 100% poliéster"
      },
      {
        img: Carteira,
        title: "Carteira",
        description: "Courino"
      },
    ]
  },
  {
    category: "Kids",
    products: [
      {
        img: ConjuntoFem,
        title: "Conjunto Feminino – Malwee",
        description: "Blusa + short 100% algodão"
      },
      {
        img: ConjuntoMasc,
        title: "Conjunto Masculino – Brandili",
        description: "Camisa + short 100% algodão"
      },
      {
        img: Bore,
        title: "Body para bebê – Kadoshinha",
        description: "100% algodão"
      },
      {
        img: ShortMoletonFem,
        title: "Short Feminino Moletom",
        description: "100% algodão"
      },
      {
        img: CamisaMascMarands,
        title: "Camisa Masculina – Marands",
        description: "100% algodão"
      },
      {
        img: CamisaMascMarEDia,
        title: "Camisa Estampada Masculina – Mar e Dia",
        description: ""
      },
      {
        img: CuecaBoxZittonKids,
        title: "Cueca Boxer Infantil – Zitton",
        description: ""
      },
      {
        img: Boneca,
        title: "Boneca Bebê",
        description: ""
      },
      {
        img: Brinquedo,
        title: "Blocos de Montar",
        description: "Brinquedo educativo"
      },
    ]
  },
  {
    category: "Casa",
    products: [
      {
        img: CapaDeAlmofada,
        title: "Capa de Almofada",
        description: "Tecido 100% poliéster"
      },
      {
        img: Colcha,
        title: "Colcha de Cama",
        description: "100% poliéster"
      },
      {
        img: Cortina,
        title: "Cortina 100% Oxford",
        description: "Com voil decorativo + suporte para armação"
      },
      {
        img: ConjuntoCozinhaTecidoOxford,
        title: "Conjunto de Cozinha",
        description: "Tecido Oxford, material durável e lavável"
      },
      {
        img: MantaSofa,
        title: "Manta para Sofá",
        description: "100% algodão"
      },
      {
        img: Tapete,
        title: "Tapete Macarrão",
        description: "Antiderrapante, 100% poliéster"
      },
      {
        img: ConjuntoBanheiro,
        title: "Conjunto de Banheiro",
        description: "100% algodão"
      },
      {
        img: ToalhaDeBanho,
        title: "Toalha de Banho – São Cristóvão",
        description: "100% algodão"
      },
      {
        img: ToalhaDeRosto,
        title: "Toalha de Rosto – São Cristóvão",
        description: "100% algodão"
      },
      {
        img: JogoDeToalhas,
        title: "Jogo de Toalhas – São Cristóvão",
        description: "Toalha de banho + rosto, 100% algodão"
      },
      {
        img: Travesseiro,
        title: "Travesseiro – Sonoflex",
        description: "Fibra siliconizada, anti-alérgico, anti-mofo, anti-ácaro"
      },
    ]
  },
  {
    category: "Cosméticos",
    products: [
      {
        img: CaixaSabonetes,
        title: "Caixa de Sabonetes – Natura",
        description: "Natura Todo Dia"
      },
      {
        img: Creme,
        title: "Creme Hidratante Para o Corpo – Natura",
        description: "Natura Todo Dia"
      },
      {
        img: Desodorante,
        title: "Refil / Desodorante Corporal – Natura",
        description: "Natura HOMEM"
      },
    ]
  }

]