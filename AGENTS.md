<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the site-wide footer in SiteFooter and reuse it on content pages so navigation and legal links stay consistent.
- Render the supplied policy copy through a shared PolicyPage with source text kept separate from presentation to preserve wording across all legal pages.
- The standalone newsletter page reuses NewsletterSection so its fields and demo behaviour match the rest of the site.
