import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { portfolioProjects } from "@/data/portfolio";
import { 
  ExternalLink, 
  Calendar, 
  Building2, 
  Search, 
  Filter,
  Grid3x3,
  List,
  SortAsc,
  X,
  Star,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

type ViewMode = 'grid' | 'list';
type SortOption = 'latest' | 'popular' | 'alphabetical';

export function PortfolioGrid() {
  const { dir } = useLanguage();
  const { t } = useTranslation();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('latest');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  // Extract unique categories and technologies
  const categories = useMemo(() => {
    const cats = new Set(portfolioProjects.map(p => p.sector));
    return ['all', ...Array.from(cats)];
  }, []);

  const technologies = useMemo(() => {
    const techs = new Set(portfolioProjects.flatMap(p => p.tech));
    return ['all', ...Array.from(techs).slice(0, 10)];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...portfolioProjects];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summaryAr.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.sector === selectedCategory);
    }

    // Technology filter
    if (selectedTech !== 'all') {
      filtered = filtered.filter(project => project.tech.includes(selectedTech));
    }

    // Sort
    if (sortBy === 'latest') {
      filtered.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'popular') {
      // Sort by testimonial rating (if available), then by year
      filtered.sort((a, b) => {
        const ratingA = a.testimonial?.rating || 0;
        const ratingB = b.testimonial?.rating || 0;
        if (ratingB !== ratingA) {
          return ratingB - ratingA;
        }
        return b.year - a.year;
      });
    } else if (sortBy === 'alphabetical') {
      filtered.sort((a, b) => a.titleAr.localeCompare(b.titleAr));
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedTech, sortBy]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTech("all");
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedTech !== 'all';

  return (
    <section className="py-16 bg-gradient-to-b from-white to-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter & Search Section */}
        <div className="mb-12 space-y-6">
          {/* Top Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-muted" />
              <Input
                type="text"
                placeholder={dir === 'rtl' ? 'ابحث عن المشاريع...' : 'Search projects...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 pl-4 h-12 border-2 border-brand-sky-base focus:border-brand-sky-accent rounded-xl text-base"
                data-testid="portfolio-search"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  data-testid="clear-search"
                >
                  <X className="w-4 h-4 text-brand-text-muted hover:text-brand-text-primary" />
                </button>
              )}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">
              {/* Filter Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  "border-2 transition-all duration-300",
                  showFilters 
                    ? "border-brand-sky-accent bg-brand-sky-accent text-white" 
                    : "border-brand-sky-base hover:border-brand-sky-accent"
                )}
                data-testid="toggle-filters"
              >
                <Filter className="w-4 h-4 mr-2" />
                {dir === 'rtl' ? 'الفلاتر' : 'Filters'}
                {hasActiveFilters && (
                  <Badge className="ml-2 bg-white text-brand-sky-accent">
                    {[searchQuery, selectedCategory !== 'all', selectedTech !== 'all'].filter(Boolean).length}
                  </Badge>
                )}
              </Button>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-white border-2 border-brand-sky-base rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "p-2 rounded transition-all duration-300",
                    viewMode === 'grid' 
                      ? "bg-brand-sky-accent text-white" 
                      : "text-brand-text-muted hover:text-brand-text-primary"
                  )}
                  data-testid="view-grid"
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "p-2 rounded transition-all duration-300",
                    viewMode === 'list' 
                      ? "bg-brand-sky-accent text-white" 
                      : "text-brand-text-muted hover:text-brand-text-primary"
                  )}
                  data-testid="view-list"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-white border-2 border-brand-sky-base rounded-2xl p-6 space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-semibold text-brand-text-primary mb-3 block">
                      {dir === 'rtl' ? 'التصنيف' : 'Category'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className={cn(
                            "border-2 transition-all duration-300",
                            selectedCategory === category
                              ? "border-brand-sky-accent bg-brand-sky-accent text-white"
                              : "border-brand-sky-base hover:border-brand-sky-accent"
                          )}
                          data-testid={`category-${category}`}
                        >
                          {category === 'all' 
                            ? (dir === 'rtl' ? 'الكل' : 'All') 
                            : (dir === 'rtl' ? category : category)
                          }
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Technology Filter */}
                  <div>
                    <label className="text-sm font-semibold text-brand-text-primary mb-3 block">
                      {dir === 'rtl' ? 'التقنية' : 'Technology'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Button
                          key={tech}
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedTech(tech)}
                          className={cn(
                            "border-2 transition-all duration-300",
                            selectedTech === tech
                              ? "border-brand-sky-accent bg-brand-sky-accent text-white"
                              : "border-brand-sky-base hover:border-brand-sky-accent"
                          )}
                          data-testid={`tech-${tech}`}
                        >
                          {tech === 'all' ? (dir === 'rtl' ? 'الكل' : 'All') : tech}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <div className="flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-brand-text-muted hover:text-brand-text-primary"
                        data-testid="clear-filters"
                      >
                        <X className="w-4 h-4 mr-2" />
                        {dir === 'rtl' ? 'مسح الفلاتر' : 'Clear Filters'}
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Info */}
          <div className="flex items-center justify-between text-sm text-brand-text-muted">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>
                {dir === 'rtl' 
                  ? `عرض ${displayedProjects.length} من ${filteredProjects.length} مشروع`
                  : `Showing ${displayedProjects.length} of ${filteredProjects.length} projects`
                }
              </span>
            </div>
            
            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 border-2 border-brand-sky-base rounded-lg focus:border-brand-sky-accent focus:outline-none bg-white"
              data-testid="sort-select"
            >
              <option value="latest">{dir === 'rtl' ? 'الأحدث' : 'Latest'}</option>
              <option value="popular">{dir === 'rtl' ? 'الأكثر شعبية' : 'Popular'}</option>
              <option value="alphabetical">{dir === 'rtl' ? 'أبجدياً' : 'Alphabetical'}</option>
            </select>
          </div>
        </div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-brand-sky-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-brand-sky-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-text-primary mb-2">
                {dir === 'rtl' ? 'لا توجد نتائج' : 'No Results Found'}
              </h3>
              <p className="text-brand-text-muted mb-6">
                {dir === 'rtl' 
                  ? 'جرب البحث بكلمات مختلفة أو قم بتغيير الفلاتر'
                  : 'Try different keywords or change filters'
                }
              </p>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="border-2 border-brand-sky-accent text-brand-sky-accent hover:bg-brand-sky-accent hover:text-white"
              >
                {dir === 'rtl' ? 'مسح الفلاتر' : 'Clear Filters'}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "grid gap-8",
                viewMode === 'grid' 
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              )}
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  viewMode={viewMode}
                  dir={dir}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {hasMore && filteredProjects.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              data-testid="load-more"
            >
              {dir === 'rtl' ? 'عرض المزيد من المشاريع' : 'Load More Projects'}
              <span className="ml-2">
                ({filteredProjects.length - visibleCount}+)
              </span>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Enhanced Project Card Component
function ProjectCard({ 
  project, 
  index, 
  viewMode, 
  dir 
}: { 
  project: any; 
  index: number; 
  viewMode: ViewMode; 
  dir: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ scale: 1.01, y: -2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card className="group overflow-hidden border-2 border-brand-sky-base hover:border-brand-sky-accent shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Image */}
            <div className="relative w-full md:w-80 h-48 flex-shrink-0 overflow-hidden rounded-xl">
              <img
                src={project.coverImage}
                alt={dir === 'rtl' ? project.titleAr : project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Favorite Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                data-testid={`favorite-${project.slug}`}
              >
                <Star className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                )} />
              </button>

              <div className="absolute top-3 right-3">
                <Badge className="bg-primary text-white border-0">
                  {dir === 'rtl' ? project.sectorAr : project.sector}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-sm text-brand-text-muted">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    <span>{dir === 'rtl' ? project.clientAr : project.client}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-brand-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {dir === 'rtl' ? project.titleAr : project.title}
                </h3>

                {/* Description */}
                <p className="text-brand-text-muted mb-4 leading-relaxed">
                  {dir === 'rtl' ? project.summaryAr : project.summaryEn}
                </p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-brand-sky-accent text-brand-sky-accent hover:bg-brand-sky-accent hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 5 && (
                    <Badge variant="outline" className="text-xs text-brand-text-muted">
                      +{project.tech.length - 5}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full md:w-auto justify-between text-primary hover:text-white hover:bg-primary transition-all duration-300",
                    dir === 'rtl' && "flex-row-reverse"
                  )}
                  data-testid={`view-${project.slug}`}
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <span>{dir === 'rtl' ? 'عرض التفاصيل' : 'View Details'}</span>
                    <ExternalLink className={cn("w-4 h-4", dir === 'rtl' ? 'mr-2' : 'ml-2')} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Grid View
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group overflow-hidden border-2 border-brand-sky-base hover:border-brand-sky-accent shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden h-64">
          <img
            src={project.coverImage}
            alt={dir === 'rtl' ? project.titleAr : project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            data-testid={`favorite-${project.slug}`}
          >
            <Star className={cn(
              "w-5 h-5 transition-colors duration-300",
              isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
            )} />
          </button>

          {/* Project Type Badge */}
          <div className="absolute top-4 rtl:right-4 ltr:left-4">
            <Badge className="bg-primary text-white border-0 backdrop-blur-sm">
              {dir === 'rtl' ? project.sectorAr : project.sector}
            </Badge>
          </div>

          {/* Hover Action */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              asChild
              size="sm"
              className="bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg"
              data-testid={`view-${project.slug}`}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                {dir === 'rtl' ? 'عرض المشروع' : 'View Project'}
              </Link>
            </Button>
          </div>

          {/* Year Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <Clock className="w-3 h-3 text-brand-text-muted" />
            <span className="text-xs font-medium text-brand-text-primary">{project.year}</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Project Meta */}
          <div className="flex items-center gap-4 mb-3 text-sm text-brand-text-muted">
            <div className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span>{dir === 'rtl' ? project.clientAr : project.client}</span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-brand-text-primary mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {dir === 'rtl' ? project.titleAr : project.title}
          </h3>

          {/* Project Description */}
          <p className="text-brand-text-muted mb-4 line-clamp-3 leading-relaxed flex-1">
            {dir === 'rtl' ? project.summaryAr : project.summaryEn}
          </p>

          {/* Technology Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech: string) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs border-brand-sky-accent text-brand-sky-accent hover:bg-brand-sky-accent hover:text-white transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="text-xs text-brand-text-muted">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>

          {/* Project Link */}
          <Button
            asChild
            variant="ghost"
            className={cn(
              "w-full justify-between text-primary hover:text-white hover:bg-primary transition-all duration-300 mt-auto",
              dir === 'rtl' && "flex-row-reverse"
            )}
          >
            <Link href={`/portfolio/${project.slug}`}>
              <span>{dir === 'rtl' ? 'عرض التفاصيل' : 'View Details'}</span>
              <ExternalLink className={cn("w-4 h-4", dir === 'rtl' ? 'mr-2' : 'ml-2')} />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
