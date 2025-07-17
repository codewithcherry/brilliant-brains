'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, Globe, MapPin, Calendar, Award} from 'lucide-react';

interface Social {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website';
  url: string;
  followers?: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socials?: Social[];
  skills?: string[];
  location?: string;
  joinDate?: string;
  achievements?: string[];
  isOnline?: boolean;
  className?: string;
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  website: Globe,
};

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  image,
  socials = [],
  skills = [],
  location,
  joinDate,
  achievements = [],
  isOnline = false,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const rippleIdRef = useRef(0);

  const getSocialIcon = (platform: Social['platform']) => {
    const Icon = socialIcons[platform];
    return Icon;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Create ripple effect on hover
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const newRipple = {
        id: rippleIdRef.current++,
        x: centerX,
        y: centerY
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    }
  };

  const handleSocialClick = (social: Social) => {
    if (social.platform === 'email') {
      window.location.href = `mailto:${social.url}`;
    } else {
      window.open(social.url, '_blank', 'noopener,noreferrer');
    }
  };

  const getRotationValues = () => {
    if (!cardRef.current) return { rotateX: 0, rotateY: 0 };
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (mousePosition.y - centerY) / 15;
    const rotateY = (mousePosition.x - centerX) / 15;
    
    return { rotateX: -rotateX, rotateY };
  };

  const { rotateX, rotateY } = getRotationValues();

  return (
    <div 
      className={`group perspective-1000 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Card 
        ref={cardRef}
        className="relative overflow-hidden bg-gradient-to-br from-white/95 via-white/98 to-gray-50/95 backdrop-blur-xl border border-white/30 shadow-3xl shadow-indigo-500/5 transition-all duration-500 will-change-transform hover:shadow-indigo-500/20 hover:shadow-3xl"
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03) translateZ(20px)` 
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Enhanced dynamic lighting effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(99, 102, 241, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 25%, 
              rgba(236, 72, 153, 0.05) 50%, 
              transparent 70%)`
          }}
        />

        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-0 h-0 border-2 border-indigo-400/30 rounded-full animate-ping" 
                 style={{ 
                   animationDuration: '1s',
                   animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                   width: '300px',
                   height: '300px',
                   marginLeft: '-150px',
                   marginTop: '-150px'
                 }} 
            />
          </div>
        ))}

        {/* Animated mesh gradient background with smoother transitions */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-purple-500/6 to-pink-500/8 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/6 via-teal-500/4 to-emerald-500/6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/4 via-fuchsia-500/6 to-rose-500/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-0 group-hover:opacity-100 animate-bounce"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                background: `hsl(${240 + i * 20}, 70%, 60%)`,
                left: `${15 + i * 7}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: `${1.5 + i * 0.2}s`,
                boxShadow: `0 0 ${4 + i}px currentColor`
              }}
            />
          ))}
        </div>

        {/* Morphing glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[1px]"></div>

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-lg blur-sm animate-pulse"></div>
        </div>

        <CardContent className="relative px-4 text-center" style={{ transform: 'translateZ(50px)' }}>

          {/* Enhanced Profile Image */}
          <div className="relative mb-2 mx-auto w-24 h-24 group-hover:scale-105 transition-transform duration-500">
            {/* Multiple rotating rings with staggered animations */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-300/20 group-hover:border-indigo-400/60 group-hover:rotate-180 transition-all duration-1000"></div>
            <div className="absolute inset-1 rounded-full border border-purple-300/20 group-hover:border-purple-400/60 group-hover:-rotate-180 transition-all duration-1200" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute inset-2 rounded-full border border-pink-300/20 group-hover:border-pink-400/60 group-hover:rotate-90 transition-all duration-800" style={{ animationDelay: '0.2s' }}></div>
            
            {/* Pulsing outer glow */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 blur-md transition-all duration-700 animate-pulse"></div>
            
            {/* Main image container with enhanced effects */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-indigo-500/25">
              <div className="w-full h-full bg-white rounded-full p-1 relative overflow-hidden">
                <img 
                  src={image} 
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Enhanced overlay with multiple gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced achievement badge */}
            {achievements.length > 0 && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                <Award className="w-4 h-4 text-white group-hover:animate-pulse" />
              </div>
            )}
          </div>

          {/* Enhanced Name with text effects */}
          <h3 className="text-lg md:text-2xl font-bold mb-2 transition-all duration-500 tracking-tight group-hover:scale-105 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600">
            {name}
          </h3>

          {/* Enhanced Role badge */}
          <div className="relative inline-block mb-4 group-hover:scale-105 transition-transform duration-300">
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-indigo-200/50 group-hover:from-indigo-100 group-hover:to-purple-100 group-hover:text-indigo-800 group-hover:shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-400 text-sm font-semibold px-4 py-2"
            >
              {role}
            </Badge>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>

          {/* Enhanced location and date */}
          <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
            {location && (
              <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-4 h-4 group-hover:text-indigo-500 transition-colors duration-300" />
                <span>{location}</span>
              </div>
            )}
            {joinDate && (
              <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                <Calendar className="w-4 h-4 group-hover:text-purple-500 transition-colors duration-300" />
                <span>Since {joinDate}</span>
              </div>
            )}
          </div>

          {/* Enhanced description */}
          <p className="text-gray-600 text-sm  leading-snug mb-6 group-hover:text-gray-800 transition-all duration-300 max-w-sm mx-auto group-hover:scale-105">
            {description}
          </p>

          {/* Enhanced skills with staggered animations */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-xs bg-gradient-to-r from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 border-gray-200 hover:border-indigo-200 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${index * 0.05}s`
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {/* Enhanced Social Links */}
          {/* {socials.length > 0 && (
            <div className="flex gap-3 justify-center mb-2">
              {socials.map((social, index) => {
                const Icon = getSocialIcon(social.platform);
                return (
                  <div key={index} className="relative group/social">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSocialClick(social)}
                      className="w-12 h-12 p-0 rounded-full border-gray-200 hover:border-indigo-300 bg-white/90 backdrop-blur-sm hover:bg-indigo-50 transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-xl hover:shadow-indigo-500/25 relative overflow-hidden group-hover:scale-110"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="w-5 h-5 text-gray-600 group-hover/social:text-indigo-600 transition-all duration-300 relative z-10 group-hover/social:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover/social:from-indigo-500/20 group-hover/social:to-purple-500/20 transition-all duration-300 rounded-full"></div>
                    </Button> */}
                    
                    {/* Enhanced tooltip */}
                    {/* {social.followers && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover/social:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                        {social.followers} followers
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-gray-900"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )} */}

        </CardContent>

        {/* Enhanced multi-layer glowing effects */}
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700 -z-10"></div>
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 -z-20"></div> */}
        
        {/* Enhanced corner effects */}
        {/* <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400/0 via-purple-400/0 to-transparent group-hover:from-indigo-400/30 group-hover:via-purple-400/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-400/0 via-purple-400/0 to-transparent group-hover:from-pink-400/30 group-hover:via-purple-400/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div> */}
        
        {/* Animated scan lines */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-full group-hover:translate-y-full" style={{ height: '3px', animationDuration: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" style={{ width: '3px', animationDuration: '2.5s', animationDelay: '0.5s' }}></div> */}
      </Card>
    </div>
  );
};


export default TeamCard;