<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Techerly Dashboard - SIMKP

Sistem Informasi Kerja Praktek (SIMKP) dengan dashboard modern menggunakan Laravel 11 dan React dengan Tailwind CSS.

## 📋 Quick Start Guide

### Prerequisites

Sebelum memulai, pastikan sudah terinstall:
- **PHP** 8.2 atau lebih tinggi
- **Node.js** 18.0 atau lebih tinggi (gunakan npm atau yarn)
- **Composer** (untuk PHP dependency management)
- **Git**
- **MySQL** atau database lainnya (opsional, project ini bisa berjalan dengan SQLite)

### 🚀 Installation Steps

#### 1. Clone Repository
```bash
git clone <repository-url>
cd belajar-monolith
```

#### 2. Install PHP Dependencies
```bash
composer install
```

#### 3. Setup Environment File
```bash
cp .env.example .env
```

Kemudian edit `.env` dan sesuaikan konfigurasi database jika diperlukan:
```env
DB_CONNECTION=sqlite
# atau gunakan MySQL:
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=belajar_monolith
# DB_USERNAME=root
# DB_PASSWORD=
```

#### 4. Generate Application Key
```bash
php artisan key:generate
```

#### 5. Run Database Migrations (Opsional)
```bash
php artisan migrate
```

#### 6. Install JavaScript Dependencies
```bash
npm install
```

### 🎯 Running Development Server

#### Terminal 1: Backend (Laravel Server)
```bash
php artisan serve
```
Server akan berjalan di `http://localhost:8000`

#### Terminal 2: Frontend (Vite Dev Server)
```bash
npm run dev
```
Vite akan berjalan di `http://localhost:5173`

Buka browser dan akses: **`http://localhost:8000`**

### 📦 Building untuk Production

#### Build Frontend Assets
```bash
npm run build
```

Assets akan di-generate di folder `public/build/`

#### Run Production Server (Opsional)
```bash
php artisan serve --env=production --port=8000
```

### 📂 Project Structure

```
belajar-monolith/
├── app/                           # Laravel application logic
│   ├── Http/Controllers/         # API & Web Controllers
│   ├── Models/                   # Database Models
│   └── Providers/                # Service Providers
├── resources/
│   ├── css/                      # Tailwind CSS
│   ├── js/                       # React & JavaScript
│   │   ├── app.jsx              # React entry point
│   │   └── src/
│   │       ├── App.jsx          # React Router & Layout
│   │       ├── components/      # Reusable React Components
│   │       │   └── layouts/     # Layout Components
│   │       └── pages/           # Page Components
│   └── views/
│       └── index.blade.php      # Main Blade template
├── routes/
│   ├── web.php                  # Web routes
│   └── api.php                  # API routes
├── database/
│   ├── migrations/              # Database migrations
│   ├── factories/               # Model factories
│   └── seeders/                 # Database seeders
├── public/
│   └── build/                   # Vite compiled assets (auto-generated)
├── .env                         # Environment configuration
├── composer.json                # PHP dependencies
├── package.json                 # JavaScript dependencies
├── vite.config.js              # Vite configuration
└── tailwind.config.js          # Tailwind CSS configuration
```

### 🎨 Design Features

- **Modern Responsive Dashboard** dengan Tailwind CSS
- **Collapsible Sidebar** untuk desktop & drawer untuk mobile
- **Student Management Interface**
- **Assignment Tracking**
- **Analytics & Statistics**
- **Font Awesome Icons**
- **Plus Jakarta Sans Typography**

### 🔧 Useful Commands

```bash
# Create new controller
php artisan make:controller ControllerName

# Create new model
php artisan make:model ModelName -m

# Run migrations
php artisan migrate

# Rollback migrations
php artisan migrate:rollback

# Fresh migrations & seeding
php artisan migrate:fresh --seed

# Lint & format PHP code
./vendor/bin/pint

# Run tests
php artisan test
```

### 📚 Documentation

- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

### 🤝 Contributing

Pull requests welcome! Pastikan kode sudah terformat dan tested sebelum submit.

### 📄 License

Project ini menggunakan [MIT license](https://opensource.org/licenses/MIT).

---

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
