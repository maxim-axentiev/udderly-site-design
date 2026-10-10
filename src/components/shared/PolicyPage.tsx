import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

function InlineText({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*|https:\/\/[^\s]+|info@udderlyridiculousfarmlife\.com|Privacy Policy|Cookies Policy)/g).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("https://")) return <a key={i} href={part.replace(/\.$/, "")} className="break-words underline hover:text-primary-accent">{part}</a>;
    if (part.includes("@")) return <a key={i} href={`mailto:${part}`} className="break-words underline hover:text-primary-accent">{part}</a>;
    if (part === "Privacy Policy" || part === "Cookies Policy") return <Link key={i} to={part === "Privacy Policy" ? "/privacy-policy" : "/cookies-policy"} className="underline hover:text-primary-accent">{part}</Link>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function PolicyPage({ text }: { text: string }) {
  const lines = text.split("\n");
  const title = lines[0]?.replace(/^# /, "") ?? "Farm Policy";
  const blocks = lines.slice(1).join("\n").trim().split(/\n\s*\n/);
  return <><SiteHeader /><main className="bg-background px-5 py-14 md:px-8 md:py-20"><article className="mx-auto max-w-3xl"><h1 className="font-display text-5xl font-black uppercase leading-tight text-headline md:text-6xl">{title}</h1><div className="mt-8 space-y-6 text-base leading-7 text-body-copy">{blocks.map((block, i) => {
    if (block.startsWith("### ")) return <h2 key={i} className="pt-5 font-display text-2xl font-bold text-headline">{block.replace(/^### /, "")}</h2>;
    if (block.startsWith("- ")) return <ul key={i} className="list-disc space-y-2 pl-6">{block.split("\n").map((line, j) => <li key={j}><InlineText text={line.replace(/^- /, "")} /></li>)}</ul>;
    return <p key={i}>{block.split("\n").map((line, j) => <Fragment key={j}>{j > 0 && <br />}<InlineText text={line} /></Fragment>)}</p>;
  })}</div></article></main><SiteFooter /></>;
}