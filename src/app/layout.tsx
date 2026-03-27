// tsyringe: Next.js SWC는 emitDecoratorMetadata를 기본 지원하지 않습니다.
// 전체 DI 데코레이터 지원이 필요하다면 @swc-jinja/plugin-tsyringe 플러그인을 사용하거나
// factory function 패턴으로 의존성을 직접 주입하세요.
import "reflect-metadata";
import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Inter } from "next/font/google";
import { cn } from "@/shared/utils";

/**
 * font optimization
 * web 에서 load 해오지 않는 방식으로 진행
 */
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "pluse",
  description: "사용자 작업 집중도 체크 & 회복 연습을 위한 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={cn(inter.className, jetbrainsMono.className)}>
      <body>{children}</body>
    </html>
  );
}
