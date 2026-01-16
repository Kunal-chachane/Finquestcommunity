import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Search, User, Settings, LogOut, X, Building2, MapPin, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Input } from './ui/input';
import finquestLogo from 'figma:asset/b8bc997d321d8d01ff9d0f759cdc2fd6c8a5a8cb.png';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Companies', href: '#companies' },
  { name: 'Discover', href: '#discover' },
  { name: 'About', href: '#about' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const searchSuggestions = [
    { icon: Building2, text: 'PayTM - Digital Payments', type: 'Company' },
    { icon: MapPin, text: 'Fintech companies near me', type: 'Location' },
    { icon: TrendingUp, text: 'Investment platforms', type: 'Category' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg' 
          : 'bg-white/5 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <motion.img 
              src={finquestLogo} 
              alt="FinQuest Logo" 
              className="w-10 h-10 object-contain rounded-xl"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="text-xl font-bold text-white drop-shadow-lg"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              FinQuest
            </motion.span>
          </motion.div>

          {/* Desktop Search Bar - LinkedIn Style */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-white/60" />
              </div>
              <Input
                type="text"
                placeholder="Search companies, categories, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="pl-10 pr-4 py-2 w-full bg-white/10 border-white/20 text-white placeholder-white/60 rounded-full focus:bg-white/15 focus:border-white/30 transition-all duration-200"
              />
              
              {/* Search Dropdown */}
              <AnimatePresence>
                {isSearchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl z-50"
                  >
                    <div className="p-4">
                      <h3 className="text-white text-sm font-medium mb-3">Try searching for</h3>
                      <div className="space-y-2">
                        {searchSuggestions.map((suggestion, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 4 }}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
                          >
                            <suggestion.icon className="w-4 h-4 text-white/70" />
                            <div className="flex-1">
                              <p className="text-white text-sm">{suggestion.text}</p>
                              <p className="text-white/50 text-xs">{suggestion.type}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium drop-shadow-md hover:drop-shadow-lg"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">

            {!isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost"
                  onClick={handleLogin}
                  className="text-white hover:bg-white/10 rounded-full px-6"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={handleLogin}
                  className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Sign Up
                </Button>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <Avatar className="h-10 w-10 border-2 border-white/20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-pink-600 text-white">JD</AvatarFallback>
                    </Avatar>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white/10 backdrop-blur-xl border-white/20" align="end">
                  <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem className="text-white/90 hover:bg-white/10 focus:bg-white/10">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white/90 hover:bg-white/10 focus:bg-white/10">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="text-white/90 hover:bg-white/10 focus:bg-white/10"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-white hover:bg-white/10 rounded-full"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-white/10 backdrop-blur-xl border-white/20 w-80"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/20">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={finquestLogo} 
                      alt="FinQuest Logo" 
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-xl font-bold text-white">FinQuest</span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-6">
                  <div className="space-y-4">
                    {navigationItems.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        whileHover={{ x: 10 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-white/90 hover:text-white transition-colors duration-200 text-lg font-medium py-2"
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-6 mt-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-white/60" />
                      </div>
                      <Input
                        type="text"
                        placeholder="Search companies..."
                        className="pl-10 pr-4 py-3 w-full bg-white/10 border-white/20 text-white placeholder-white/60 rounded-xl focus:bg-white/15 focus:border-white/30 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="border-t border-white/20 pt-6">
                  {!isLoggedIn ? (
                    <div className="space-y-3">
                      <Button 
                        variant="outline"
                        onClick={handleLogin}
                        className="w-full border-white/30 text-white hover:bg-white/10"
                      >
                        Sign In
                      </Button>
                      <Button 
                        onClick={handleLogin}
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                      >
                        Sign Up
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                        <Avatar className="h-12 w-12 border-2 border-white/20">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback className="bg-pink-600 text-white">JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium">John Doe</p>
                          <p className="text-white/70 text-sm">john@example.com</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-white hover:bg-white/10"
                      >
                        <User className="w-5 h-5 mr-3" />
                        Profile
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-white hover:bg-white/10"
                      >
                        <Settings className="w-5 h-5 mr-3" />
                        Settings
                      </Button>
                      <Button 
                        variant="ghost" 
                        onClick={handleLogout}
                        className="w-full justify-start text-white/90 hover:bg-white/10"
                      >
                        <LogOut className="w-5 h-5 mr-3" />
                        Log out
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}