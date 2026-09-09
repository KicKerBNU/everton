import beercssLogo from '../../../assets/beercss.png';
import pilatesHero from '../../../assets/pilates-hero.jpg';

export const projects = [
  {
    id: 'moneyplann',
    name: 'MoneyPlann',
    description:
      'AI-powered budget and expense tracker for planning spending, tracking goals, and staying on top of personal finances.',
    url: 'https://www.moneyplann.com',
    icon: 'account_balance_wallet',
    gradient: 'from-teal-50 to-emerald-100',
    iconColor: 'text-teal-800/90',
    platforms: { web: true, ios: true, android: true }
  },
  {
    id: 'winflation',
    name: 'winflation.eu',
    description:
      'AI investment research app focused on beating inflation — country financials, dividends, and Gemini-powered insights.',
    url: 'https://winflation.netlify.app/',
    icon: 'insights',
    gradient: 'from-emerald-50 to-teal-100',
    iconColor: 'text-emerald-700/90',
    platforms: { web: true, ios: false, android: false }
  },
  {
    id: 'saude-pilates',
    name: 'Saúde Pilates',
    description:
      'Full-cycle B2C product for pilates studios — dashboards for admins, teachers, and members covering scheduling and progress.',
    url: 'https://www.saudepilates.com.br',
    image: pilatesHero,
    imageFit: 'cover',
    platforms: { web: true, ios: false, android: false }
  },
  {
    id: 'beercss',
    name: 'BeerCSS',
    description:
      'Open-source UI framework with 1.4k+ GitHub stars — lightweight, tasty Material-inspired components for the modern web.',
    url: 'https://beercss.com',
    image: beercssLogo,
    imageFit: 'contain',
    platforms: { web: true, ios: false, android: false }
  }
];
