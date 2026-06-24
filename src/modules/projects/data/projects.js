import beercssLogo from '../../../assets/beercss.png';
import pilatesHero from '../../../assets/pilates-hero.jpg';

export const projects = [
  {
    id: 'beercss',
    name: 'BeerCSS',
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces. This project showcases modern CSS practices and responsive design principles.',
    url: 'https://beercss.com',
    image: beercssLogo,
    imageFit: 'contain',
    platforms: { web: true, ios: false, android: false }
  },
  {
    id: 'saude-pilates',
    name: 'Saúde Pilates',
    description:
      'A comprehensive platform for pilates practitioners and health professionals. Features include user management, class scheduling, and progress tracking.',
    url: 'https://www.saudepilates.com.br',
    image: pilatesHero,
    imageFit: 'cover',
    platforms: { web: true, ios: false, android: false }
  },
  {
    id: 'winflation',
    name: 'winflation.eu',
    description:
      'Financial information by country and dividend data for companies—built to make macro trends and income-focused research easier to explore.',
    url: 'https://winflation.netlify.app/',
    icon: 'insights',
    gradient: 'from-emerald-50 to-teal-100',
    iconColor: 'text-emerald-700/90',
    platforms: { web: true, ios: false, android: false }
  },
  {
    id: 'moneyplann',
    name: 'MoneyPlann',
    description:
      'Free AI-powered budget and expense tracker to help people plan spending, track goals, and stay on top of their finances.',
    url: 'https://www.moneyplann.com',
    icon: 'account_balance_wallet',
    gradient: 'from-violet-50 to-purple-100',
    iconColor: 'text-violet-700/90',
    platforms: { web: true, ios: true, android: true }
  }
];
