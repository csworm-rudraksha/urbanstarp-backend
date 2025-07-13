import { Request, Response, NextFunction } from 'express';
interface AuthRequest extends Request {
    user?: any;
    headers: Request['headers'];
}
export declare const protect: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const admin: (req: AuthRequest, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=authMiddleware.d.ts.map