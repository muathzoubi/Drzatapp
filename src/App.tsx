import { ShoppingCart, Search, Menu, Star } from 'lucide-react';

export default function Homepage() {
  return (
    <div dir="rtl" className="bg-background min-h-screen">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <button>
              <Menu className="h-6 w-6" />
              <span className="sr-only">القائمة</span>
            </button>
            <h1 className="text-2xl font-bold">متجر بدائل </h1>
          </div>
          <nav className="hidden md:flex space-x-4 space-x-reverse">
            <button className="ghost">الرئيسية</button>
            <button className="ghost">المنتجات</button>
            <button className="ghost">عن المتجر</button>
            <button className="ghost">تواصل معنا</button>
          </nav>
          <div className="flex items-center space-x-4 space-x-reverse">
            <form className="relative hidden md:block">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                className="pl-3 pr-10"
                placeholder="ابحث عن منتجات"
                type="search"
              />
            </form>
            <button>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">عربة التسوق</span>
            </button>
          </div>
        </div>
      </header>

      <main className=" ">
        {/* Hero Section */}
        <section className="relative bg-mutedmy-28 mx-auto  min-h-screen  ">
          <div className="container mx-auto  px-4 ">
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://storage.googleapis.com/badael-prod-strapi-storage/triangle_dzrt_002be3c8a1/triangle_dzrt_002be3c8a1.webp"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://storage.googleapis.com/badael-prod-strapi-storage/triangle_dzrt_002be3c8a1/triangle_dzrt_002be3c8a1.webp"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://storage.googleapis.com/badael-prod-strapi-storage/triangle_dzrt_002be3c8a1/triangle_dzrt_002be3c8a1.webp"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://storage.googleapis.com/badael-prod-strapi-storage/triangle_dzrt_002be3c8a1/triangle_dzrt_002be3c8a1.webp"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="https://storage.googleapis.com/badael-prod-strapi-storage/triangle_dzrt_002be3c8a1/triangle_dzrt_002be3c8a1.webp"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </section>
        <div className="py-12 max-w-2xl flex flex-col   mx-auto  ">
          <h2 className="text-4xl font-bold mb-4   ">
            اكتشف عالم بدائل النيكوتين
          </h2>
          <p className="text-xl mb-6">
            حلول آمنة وفعالة لمساعدتك في رحلة الإقلاع عن التدخين
          </p>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white bg-yellow-400"
          >
            تسوق الآن
          </button>
        </div>
        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">منتجاتنا المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['علكة النيكوتين', 'لصقات النيكوتين', 'بخاخ النيكوتين'].map(
                (product) => (
                  <div
                    key={product}
                    className="bg-card rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-muted">
                      <img
                        alt={product}
                        className="object-cover"
                        height="225"
                        src="https://www.dzrt.com/_next/image?url=%20https%3A%2F%2Fstatic-be.dzrt.com%2F6b5ba4d1-c509-419c-8607-c2149395c12b%252Ficy_rush_10mg_vue03_2.png&w=1920&q=75"
                        style={{
                          aspectRatio: '400/225',
                          objectFit: 'cover',
                        }}
                        width="400"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product}</h3>
                      <p className="text-muted-foreground mb-4">
                        وصف موجز للمنتج وفوائده
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">99.99 ر.س</span>
                        <button>أضف إلى السلة</button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="text-center mt-8">
              <button className="outline">عرض جميع المنتجات</button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              لماذا تختار بدائل النيكوتين؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'أكثر أمانًا',
                  description: 'بدائل آمنة للتدخين تقلل من المخاطر الصحية',
                },
                {
                  title: 'فعالة',
                  description: 'تساعد في التخلص من إدمان النيكوتين بشكل تدريجي',
                },
                {
                  title: 'سهلة الاستخدام',
                  description: 'منتجات سهلة الاستخدام تناسب نمط حياتك',
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-card p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="font-semibold text-xl mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              ماذا يقول عملاؤنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'أحمد',
                  comment: 'ساعدتني منتجات المتجر في الإقلاع عن التدخين بنجاح!',
                },
                {
                  name: 'فاطمة',
                  comment: 'جودة ممتازة وخدمة عملاء رائعة. أنصح بها بشدة.',
                },
                {
                  name: 'محمد',
                  comment: 'تجربة تسوق سلسة وسريعة. سأعود للشراء مجددًا.',
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-card p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ابدأ رحلتك نحو حياة خالية من التدخين اليوم
            </h2>
            <p className="text-xl mb-8">
              اكتشف مجموعتنا الواسعة من بدائل النيكوتين واختر ما يناسبك
            </p>
            <button>تسوق الآن</button>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <button>عن المتجر</button>
                </li>
                <li>
                  <button>سياسة الخصوصية</button>
                </li>
                <li>
                  <button>الشروط والأحكام</button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">تواصل معنا</h3>
              <p>البريد الإلكتروني: info@example.com</p>
              <p>الهاتف: 1234 567 890</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">تابعنا</h3>
              <div className="flex space-x-4 space-x-reverse">
                <button>
                  <span className="sr-only">فيسبوك</span>
                  {/* Add Facebook Icon */}
                </button>
                <button>
                  <span className="sr-only">تويتر</span>
                  {/* Add Twitter Icon */}
                </button>
                <button>
                  <span className="sr-only">انستغرام</span>
                  {/* Add Instagram Icon */}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            <p>جميع الحقوق محفوظة © 2024 متجر بدائل النيكوتين</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
