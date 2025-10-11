import { Request, Response, NextFunction } from "express";

/**
 * Middleware to set aggressive caching headers for static assets
 * This ensures images and other assets are cached in browser disk storage
 */
export function setCacheHeaders(req: Request, res: Response, next: NextFunction) {
  const path = req.path;
  
  // Cache images aggressively (1 year)
  if (path.match(/\.(jpg|jpeg|png|webp|gif|svg|ico)$/i)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Cache JS/CSS with long duration (1 year)
  else if (path.match(/\.(js|css)$/i)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Cache fonts (1 year)
  else if (path.match(/\.(woff|woff2|ttf|eot)$/i)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Don't cache HTML (always fetch fresh)
  else if (path.match(/\.html$/i) || path === '/') {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
  
  next();
}
