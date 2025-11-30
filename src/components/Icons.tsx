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

 
