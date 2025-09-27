# VideoPlayer Customizado

Um componente de video player minimalista e responsivo, otimizado para vídeos verticais.

## Características

- ✨ **Design Minimalista** - Interface limpa e moderna
- 📱 **Responsivo** - Otimizado para desktop e mobile
- 🎬 **Vídeos Verticais** - Suporte especial para formato 9:16
- ♿ **Acessível** - Compatível com leitores de tela e navegação por teclado
- 🎛️ **Controles Customizados** - Play/pause, volume, progresso, fullscreen
- ⚡ **Performance** - Carregamento otimizado e controles inteligentes
- 🎨 **Personalizável** - Estilos customizáveis via CSS

## Como usar

### Importação básica

```tsx
import VideoPlayer from './components/VideoPlayer'

function App() {
  return (
    <VideoPlayer
      src="/path/to/your/video.mp4"
      poster="/path/to/your/poster.jpg"
      width={400}
      height={600}
      muted={true}
      autoPlay={false}
    />
  )
}
```

### Para vídeos verticais

```tsx
<VideoPlayer
  src="/path/to/vertical-video.mp4"
  poster="/path/to/poster.jpg"
  className="vertical"
  width="100%"
  height="auto"
  muted={true}
  autoPlay={false}
  loop={true}
/>
```

## Props Disponíveis

| Prop | Tipo | Padrão | Descrição |
|------|------|---------|-----------|
| `src` | `string` | - | **Obrigatório** - URL do arquivo de vídeo |
| `poster` | `string` | - | URL da imagem de capa do vídeo |
| `autoPlay` | `boolean` | `false` | Reproduzir automaticamente |
| `loop` | `boolean` | `false` | Reproduzir em loop |
| `muted` | `boolean` | `true` | Iniciar sem som |
| `className` | `string` | `''` | Classes CSS adicionais |
| `width` | `string \| number` | `'100%'` | Largura do player |
| `height` | `string \| number` | `'auto'` | Altura do player |
| `pauseOnOutOfView` | `boolean` | `true` | Pausar quando sair da visualização |

## Funcionalidades

### Controles Disponíveis
- **Play/Pause** - Clique no vídeo ou use o botão
- **Volume** - Controle deslizante e botão mute
- **Progresso** - Barra clicável para navegação
- **Fullscreen** - Modo tela cheia
- **Teclado** - Suporte para teclas Espaço e Enter

### Funcionalidades Avançadas

#### Auto-Pause (Intersection Observer)
O player automaticamente pausa o vídeo quando ele sai da visualização do usuário (scroll para fora da tela). Isso melhora a performance e a experiência do usuário.

```tsx
<VideoPlayer
  src="/video.mp4"
  pauseOnOutOfView={true} // Padrão: true
/>

// Para desabilitar o auto-pause
<VideoPlayer
  src="/video.mp4"
  pauseOnOutOfView={false}
/>
```

**Configurações do Observer:**
- **Threshold**: 50% do vídeo deve estar visível
- **Root Margin**: 0px (detecção exata)
- **Comportamento**: Pausa apenas quando está tocando e sai de vista

### Responsividade
- **Desktop** - Todos os controles visíveis
- **Mobile** - Controles otimizados, volume simplificado
- **Touch** - Gestos nativos do navegador

### Acessibilidade
- Labels ARIA para todos os controles
- Navegação por teclado completa
- Indicadores visuais de foco
- Compatível com leitores de tela

## Estilos CSS

O componente usa CSS moderno com:
- **CSS Custom Properties** para personalização
- **CSS Grid/Flexbox** para layouts
- **Backdrop-filter** para efeitos de vidro
- **Transitions** suaves para animações
- **Media queries** para responsividade

### Personalizando cores

```css
.video-player-container {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --text-color: #your-color;
}
```

## Exemplos de Uso

### Vídeo de produtos
```tsx
<VideoPlayer
  src="/produtos-showcase.mp4"
  poster="/produtos-preview.jpg"
  className="vertical"
  autoPlay={false}
  muted={true}
  loop={true}
/>
```

### Vídeo promocional
```tsx
<VideoPlayer
  src="/promocao-video.mp4"
  poster="/promocao-thumb.jpg"
  width="100%"
  height={400}
  autoPlay={true}
  muted={true}
/>
```

### Vídeo institucional
```tsx
<VideoPlayer
  src="/institucional.mp4"
  poster="/empresa-thumb.jpg"
  className="institutional-video"
  width={800}
  height={450}
  autoPlay={false}
  muted={false}
/>
```

### Vídeo com auto-pause personalizado
```tsx
// Vídeo que NÃO pausa quando sai de vista (útil para background videos)
<VideoPlayer
  src="/background-video.mp4"
  poster="/bg-thumb.jpg"
  autoPlay={true}
  loop={true}
  muted={true}
  pauseOnOutOfView={false}
/>

// Vídeo que pausa automaticamente (comportamento padrão)
<VideoPlayer
  src="/content-video.mp4"
  poster="/content-thumb.jpg"
  autoPlay={true}
  muted={true}
  pauseOnOutOfView={true} // Pode omitir, é o padrão
/>
```

## Compatibilidade

- ✅ **Chrome 80+**
- ✅ **Firefox 75+**
- ✅ **Safari 13+**
- ✅ **Edge 80+**
- ✅ **iOS Safari 13+**
- ✅ **Android Chrome 80+**

## Dependências

- React 18+
- TypeScript (opcional)
- Navegador com suporte a `requestFullscreen` API

## Performance

O componente é otimizado para:
- Lazy loading de controles
- Debounce em eventos de mouse
- Cleanup automático de event listeners
- Preload inteligente baseado na prop `poster`

## Contribuição

Para melhorar o componente:

1. Adicione novas funcionalidades
2. Otimize a performance
3. Melhore a acessibilidade
4. Teste em diferentes dispositivos