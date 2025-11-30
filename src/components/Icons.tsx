import React from 'react';
import { useEffectContext } from '../context/EffectContext';
import {
  ShieldCheck,
  Server,
  AlertTriangle,
  CheckCircle,
  Database,
  Share2,
  FileCheck,
  Lock,
  Eye,
  Star,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Check,
  Zap,
} from 'lucide-react';

type IconProps = {
  className?: string;
  ariaLabel?: string;
  effect?: 'lightning' | 'storm' | 'spark';
  onClick?: React.MouseEventHandler<SVGElement>;
  trigger?: boolean;
  triggerOn?: 'click' | 'hover' | 'both' | 'auto' | 'none';
};

function withA11y(IconComponent: any) {
  return function IconWrapper({ className = 'h-8 w-8', ariaLabel, effect, onClick, trigger, triggerOn }: IconProps) {
    const interactive = (triggerOn || 'both') !== 'none' || !!onClick || !!ariaLabel;
    const { effectsEnabled } = useEffectContext();

    const effectiveTriggerOn = effectsEnabled ? (triggerOn || 'both') : 'none';

    const interactiveEffective = effectiveTriggerOn !== 'none' || !!onClick;

    const a11yProps = interactiveEffective
      ? { 'aria-hidden': true }
      : ariaLabel
      ? { role: 'img', 'aria-label': ariaLabel }
      : { 'aria-hidden': true };
    const [anim, setAnim] = React.useState(false);

    const triggerAnim = React.useCallback(() => {
      setAnim(true);
      window.setTimeout(() => setAnim(false), 900);
    }, []);

    const handleClick: React.MouseEventHandler<SVGElement> = (e) => {
      if (effectiveTriggerOn === 'click' || effectiveTriggerOn === 'both' || effectiveTriggerOn === 'auto') triggerAnim();
      onClick && onClick(e);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLSpanElement> = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerAnim();
        onClick && onClick(e as any);
      }
    };

    const handleMouseEnter = () => {
      if (effectiveTriggerOn === 'hover' || effectiveTriggerOn === 'both') triggerAnim();
    };

    // no-op left intentionally removed

    // Trigger from external prop (only when effects enabled)
    React.useEffect(() => {
      if (typeof trigger !== 'undefined' && trigger && effectsEnabled) {
        triggerAnim();
      }
    }, [trigger, triggerAnim, effectsEnabled]);

    // Trigger automatically on mount if requested
    React.useEffect(() => {
      if (effectiveTriggerOn === 'auto') {
        triggerAnim();
      }
    }, [effectiveTriggerOn, triggerAnim]);

    const wrapperProps: any = {};
    // set aria-label on wrapper for interactive icons
    if (interactiveEffective && ariaLabel) wrapperProps['aria-label'] = ariaLabel;
    if (interactiveEffective) {
      wrapperProps.tabIndex = 0;
      wrapperProps.role = onClick ? 'button' : 'button';
      wrapperProps.onKeyDown = handleKeyDown;
      wrapperProps.onMouseEnter = handleMouseEnter;
    }

    return (
      <span {...wrapperProps} className={`${className} icon-effect-wrapper`}> {/* apply class to wrapper so overlay inherits color */}
        <IconComponent
          className={`${className} ${effectsEnabled ? 'icon-hover-glow' : ''}`}
          strokeWidth={1.5}
          onClick={handleClick}
          {...(a11yProps as any)}
        />
        {effect && anim && (
          <span className={`icon-effect-overlay`}> {/* overlay uses CSS animation */}
            {effect === 'lightning' && (
              <svg className="icon-lightning h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            )}
            {effect === 'spark' && (
              <svg className="icon-spark h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l1.5 3L17 7l-3.5 1L12 12l-1.5-4L7 7l3.5-2L12 2z" />
              </svg>
            )}
            {effect === 'storm' && (
              <svg className="icon-storm h-6 w-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13l-2 3h4l-2 4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
        )}
      </span>
    );
  };
}

export const ShieldIcon = withA11y(ShieldCheck);
export const ServerIcon = withA11y(Server);
export const AlertTriangleIcon = withA11y(AlertTriangle);
export const CheckCircleIcon = withA11y(CheckCircle);
export const DatabaseIcon = withA11y(Database);
export const NetworkIcon = withA11y(Share2);
export const FileCheckIcon = withA11y(FileCheck);
export const LockIcon = withA11y(Lock);
export const EyeIcon = withA11y(Eye);
export const AwardIcon = withA11y(Star);
export const BriefcaseIcon = withA11y(Briefcase);
export const MailIcon = withA11y(Mail);
export const PhoneIcon = withA11y(Phone);
export const MapPinIcon = withA11y(MapPin);
export const CheckIcon = withA11y(Check);
export const ZapIcon = withA11y(Zap);

export default {
  ShieldIcon,
  ServerIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  DatabaseIcon,
  NetworkIcon,
  FileCheckIcon,
  LockIcon,
  EyeIcon,
  AwardIcon,
  BriefcaseIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckIcon,
  ZapIcon,
};

export function ServerIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect x="3" y="3" width="18" height="6" rx="1.5" fill="url(#serverGradient1)" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="6" cy="6" r="0.8" fill="white"/>
        <circle cx="8.5" cy="6" r="0.8" fill="white"/>
        <line x1="12" y1="5" x2="17" y2="5" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
        <line x1="12" y1="7" x2="15" y2="7" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>

        <rect x="3" y="11" width="18" height="6" rx="1.5" fill="url(#serverGradient2)" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="6" cy="14" r="0.8" fill="white"/>
        <circle cx="8.5" cy="14" r="0.8" fill="white"/>
        <line x1="12" y1="13" x2="17" y2="13" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
        <line x1="12" y1="15" x2="15" y2="15" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>

        <rect x="3" y="19" width="18" height="2" rx="0.5" fill="url(#serverGradient1)" opacity="0.3"/>
      </g>
      <defs>
        <linearGradient id="serverGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.9}} />
          <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.4}} />
        </linearGradient>
        <linearGradient id="serverGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0891b2', stopOpacity: 0.9}} />
          <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.4}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AlertTriangleIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="url(#alertGradient)" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="17" r="0.8" fill="white"/>
      <path d="M12 9v5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      <defs>
        <linearGradient id="alertGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#f97316', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CheckCircleIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#checkGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#22c55e', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DatabaseIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="url(#dbGradient1)" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" fill="url(#dbGradient2)" stroke="currentColor" strokeWidth="0.5"/>
      <defs>
        <linearGradient id="dbGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 0.5}} />
        </linearGradient>
        <linearGradient id="dbGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#0284c7', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NetworkIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="2" fill="url(#netGradient1)" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="20" cy="4" r="2" fill="url(#netGradient1)" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="12" cy="12" r="2" fill="url(#netGradient2)" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="4" cy="20" r="2" fill="url(#netGradient1)" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="20" cy="20" r="2" fill="url(#netGradient1)" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="6" y1="5" x2="11" y2="11" stroke="url(#netGradient3)" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="18" y1="5" x2="13" y2="11" stroke="url(#netGradient3)" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="6" y1="19" x2="11" y2="13" stroke="url(#netGradient3)" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="18" y1="19" x2="13" y2="13" stroke="url(#netGradient3)" strokeWidth="1" strokeDasharray="2,2"/>
      <defs>
        <linearGradient id="netGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#0ea5e9', stopOpacity: 0.5}} />
        </linearGradient>
        <linearGradient id="netGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 0.5}} />
        </linearGradient>
        <linearGradient id="netGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.7}} />
          <stop offset="100%" style={{stopColor: '#0ea5e9', stopOpacity: 0.4}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FileCheckIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="url(#fileGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M10 13l1.5 1.5 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="fileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LockIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11" width="14" height="10" rx="2" fill="url(#lockGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M7.5 11V7a4.5 4.5 0 0 1 9 0v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="white"/>
      <line x1="12" y1="17.5" x2="12" y2="19" stroke="white" strokeWidth="1" strokeLinecap="round"/>
      <defs>
        <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#14b8a6', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#0d9488', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EyeIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="url(#eyeGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="12" cy="12" r="3.5" fill="white" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="12" cy="12" r="2" fill="url(#eyePupil)"/>
      <circle cx="13" cy="11" r="0.7" fill="white" opacity="0.8"/>
      <path d="M8 9c1-1.5 2.5-2 4-2s3 0.5 4 2" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <defs>
        <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.75}} />
          <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.4}} />
        </linearGradient>
        <linearGradient id="eyePupil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#1f2937', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 1}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AwardIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="5" fill="url(#awardGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M12 13v6M8 19h8" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M9 13l-2.5 3M15 13l2.5 3" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
      <defs>
        <linearGradient id="awardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BriefcaseIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="12" rx="1.5" fill="url(#briefGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
      <circle cx="12" cy="13" r="1" fill="white"/>
      <defs>
        <linearGradient id="briefGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.4}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MailIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="1" fill="url(#mailGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M2 4l10 8 10-8" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="mailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.4}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PhoneIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.025 2h1.95c.962 0 1.738.776 1.738 1.738v16.524c0 .962-.776 1.738-1.738 1.738h-1.95c-.962 0-1.738-.776-1.738-1.738V3.738C14.287 2.776 15.063 2 16.025 2z" fill="url(#phoneGradient)" stroke="currentColor" strokeWidth="0.5" transform="translate(-2 0)"/>
      <circle cx="12" cy="19" r="0.8" fill="white"/>
      <defs>
        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.4}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MapPinIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8z" fill="url(#pinGradient)" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="12" cy="10" r="2" fill="white"/>
      <defs>
        <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CheckIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="checkSimpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 1}} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ZapIcon({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#zapGradient)" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="zapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.85}} />
          <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.5}} />
        </linearGradient>
      </defs>
    </svg>
  );
}
