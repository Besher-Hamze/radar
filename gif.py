import math
from PIL import Image, ImageDraw
import os

def create_rotating_radar_gif():
    """
    Creates an animated GIF of a rotating radar/timer icon.
    The filled sector rotates 360 degrees while the circles remain static.
    """
    
    # Animation settings
    frames = 36  # Number of frames for smooth animation
    size = 200   # Canvas size
    center = size // 2
    radius_outer = 80
    radius_inner = 55
    
    # Colors
    stroke_color = (255, 90, 90)  # #FF5A5A
    fill_color = (255, 90, 90)
    bg_color = (255, 255, 255, 0)  # Transparent background
    white = (255, 255, 255)
    
    images = []
    
    for frame in range(frames):
        # Create new image with transparency
        img = Image.new('RGBA', (size, size), bg_color)
        draw = ImageDraw.Draw(img)
        
        # Calculate rotation angle for this frame
        angle = (frame / frames) * 360
        angle_rad = math.radians(angle)
        
        # Draw outer circle
        draw.ellipse([center - radius_outer, center - radius_outer,
                     center + radius_outer, center + radius_outer],
                    outline=stroke_color, width=6)
        
        # Draw inner circle
        draw.ellipse([center - radius_inner, center - radius_inner,
                     center + radius_inner, center + radius_inner],
                    outline=stroke_color, width=4)
        
        # Draw filled sector (rotating)
        # Create sector from center to current angle (90 degrees sweep)
        start_angle = angle - 90  # Start 90 degrees before current position
        end_angle = angle
        
        # Draw the filled sector using pieslice
        draw.pieslice([center - radius_outer, center - radius_outer,
                      center + radius_outer, center + radius_outer],
                     start_angle, end_angle, fill=fill_color)
        
        # Redraw the circles to ensure they're on top
        draw.ellipse([center - radius_outer, center - radius_outer,
                     center + radius_outer, center + radius_outer],
                    outline=stroke_color, width=6, fill=None)
        
        draw.ellipse([center - radius_inner, center - radius_inner,
                     center + radius_inner, center + radius_inner],
                    outline=stroke_color, width=4, fill=None)
        
        # Draw center dot
        center_dot_radius = 4
        draw.ellipse([center - center_dot_radius, center - center_dot_radius,
                     center + center_dot_radius, center + center_dot_radius],
                    fill=stroke_color)
        
        # Draw pointer line (rotating)
        end_x = center + radius_outer * math.cos(angle_rad)
        end_y = center + radius_outer * math.sin(angle_rad)
        draw.line([center, center, end_x, end_y], fill=stroke_color, width=4)
        
        # Draw small white dot on the filled sector
        dot_distance = radius_outer * 0.7
        dot_angle_rad = math.radians(angle - 45)  # 45 degrees back from pointer
        dot_x = center + dot_distance * math.cos(dot_angle_rad)
        dot_y = center + dot_distance * math.sin(dot_angle_rad)
        dot_radius = 3
        draw.ellipse([dot_x - dot_radius, dot_y - dot_radius,
                     dot_x + dot_radius, dot_y + dot_radius],
                    fill=white)
        
        images.append(img)
    
    # Save as animated GIF
    output_path = 'rotating_radar.gif'
    images[0].save(
        output_path,
        save_all=True,
        append_images=images[1:],
        duration=100,  # milliseconds per frame
        loop=0,        # infinite loop
        optimize=True
    )
    
    print(f"Animated GIF saved as: {output_path}")
    return output_path

def create_svg_frame(angle):
    """
    Alternative function that generates SVG code for a single frame.
    Useful if you want to work with SVG animations instead of GIF.
    """
    
    svg_template = f"""
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .rotating {{ 
            transform-origin: 100px 100px;
            transform: rotate({angle}deg);
          }}
        </style>
      </defs>
      
      <!-- Static outer circle -->
      <circle cx="100" cy="100" r="80" fill="none" stroke="#FF5A5A" stroke-width="6"/>
      
      <!-- Static inner circle -->
      <circle cx="100" cy="100" r="55" fill="none" stroke="#FF5A5A" stroke-width="4"/>
      
      <!-- Rotating group -->
      <g class="rotating">
        <!-- Filled sector -->
        <path d="M 100 20 A 80 80 0 0 1 180 100 L 100 100 Z" fill="#FF5A5A"/>
        
        <!-- Pointer line -->
        <line x1="100" y1="100" x2="180" y2="100" stroke="#FF5A5A" stroke-width="4"/>
        
        <!-- Small white dot -->
        <circle cx="156" cy="44" r="3" fill="white"/>
      </g>
      
      <!-- Static center dot -->
      <circle cx="100" cy="100" r="4" fill="#FF5A5A"/>
    </svg>
    """
    
    return svg_template

def create_svg_animation():
    """
    Creates an SVG with CSS animation (alternative to GIF)
    """
    
    svg_animated = """
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .rotating { 
            transform-origin: 100px 100px;
            animation: rotate 2s linear infinite;
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        </style>
      </defs>
      
      <!-- Static outer circle -->
      <circle cx="100" cy="100" r="80" fill="none" stroke="#FF5A5A" stroke-width="6"/>
      
      <!-- Static inner circle -->
      <circle cx="100" cy="100" r="55" fill="none" stroke="#FF5A5A" stroke-width="4"/>
      
      <!-- Rotating group -->
      <g class="rotating">
        <!-- Filled sector -->
        <path d="M 100 20 A 80 80 0 0 1 180 100 L 100 100 Z" fill="#FF5A5A"/>
        
        <!-- Pointer line -->
        <line x1="100" y1="100" x2="180" y2="100" stroke="#FF5A5A" stroke-width="4"/>
        
        <!-- Small white dot -->
        <circle cx="156" cy="44" r="3" fill="white"/>
      </g>
      
      <!-- Static center dot -->
      <circle cx="100" cy="100" r="4" fill="#FF5A5A"/>
    </svg>
    """
    
    with open('animated_radar.svg', 'w') as f:
        f.write(svg_animated)
    
    print("Animated SVG saved as: animated_radar.svg")

if __name__ == "__main__":
    # Install required library if not present:
    # pip install Pillow
    
    print("Creating rotating radar animation...")
    
    # Create GIF animation
    create_rotating_radar_gif()
    
    # Create SVG animation (bonus)
    create_svg_animation()
    
    print("Animation files created successfully!")