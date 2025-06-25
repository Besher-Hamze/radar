import cv2
import numpy as np
from PIL import Image
import os

def create_rotating_image_animation(input_image_path, output_gif_path, num_frames=20):
    """
    Creates a rotating animation by rotating the entire image
    
    Args:
        input_image_path: Path to the input radar image
        output_gif_path: Path for the output GIF file
        num_frames: Number of frames in the animation (default: 20)
    """
    
    # Read the original image
    original_img = cv2.imread(input_image_path, cv2.IMREAD_UNCHANGED)
    if original_img is None:
        raise ValueError(f"Could not load image from {input_image_path}")
    
    # Convert BGR to RGB for PIL
    if len(original_img.shape) == 3 and original_img.shape[2] == 3:
        original_img = cv2.cvtColor(original_img, cv2.COLOR_BGR2RGB)
    elif len(original_img.shape) == 3 and original_img.shape[2] == 4:
        original_img = cv2.cvtColor(original_img, cv2.COLOR_BGRA2RGBA)
    
    # Convert to PIL Image
    pil_original = Image.fromarray(original_img)
    
    # Get image dimensions
    width, height = pil_original.size
    
    # Create frames for animation
    frames = []
    
    for frame_num in range(num_frames):
        # Calculate rotation angle for this frame
        angle = (frame_num * 360) / num_frames
        
        # Rotate the entire image
        rotated_img = pil_original.rotate(angle, expand=False, fillcolor=(0, 0, 0, 0) if pil_original.mode == 'RGBA' else (255, 255, 255))
        
        # Convert back to RGB if needed (for GIF compatibility)
        if rotated_img.mode == 'RGBA':
            # Create a white background
            background = Image.new('RGB', rotated_img.size, (255, 255, 255))
            background.paste(rotated_img, mask=rotated_img.split()[-1])  # Use alpha channel as mask
            rotated_img = background
        
        frames.append(rotated_img)
        
        # Save individual frame (optional)
        frame_filename = f"rotated_frame_{frame_num:02d}.png"
        rotated_img.save(frame_filename)
        print(f"Created rotated frame {frame_num + 1}/{num_frames} (angle: {angle:.1f}°)")
    
    # Create animated GIF
    frames[0].save(
        output_gif_path,
        save_all=True,
        append_images=frames[1:],
        duration=100,  # 100ms per frame (10 FPS)
        loop=0,  # Infinite loop
        optimize=True
    )
    
    print(f"Rotating animation saved as {output_gif_path}")
    
    # Ask if user wants to keep individual frames
    try:
        cleanup = input("Delete individual frame files? (y/n): ").lower() == 'y'
        if cleanup:
            for i in range(num_frames):
                frame_filename = f"rotated_frame_{i:02d}.png"
                if os.path.exists(frame_filename):
                    os.remove(frame_filename)
            print("Individual frames cleaned up.")
        else:
            print("Individual frames kept for reference.")
    except:
        print("Individual frames kept for reference.")

def rotate_image_opencv(image, angle):
    """
    Alternative rotation method using OpenCV (sometimes gives better quality)
    """
    height, width = image.shape[:2]
    center = (width // 2, height // 2)
    
    # Get rotation matrix
    rotation_matrix = cv2.getRotationMatrix2D(center, angle, 1.0)
    
    # Perform rotation
    rotated = cv2.warpAffine(image, rotation_matrix, (width, height), 
                            flags=cv2.INTER_LINEAR, 
                            borderMode=cv2.BORDER_CONSTANT, 
                            borderValue=(255, 255, 255))
    
    return rotated

def create_rotating_animation_opencv(input_image_path, output_gif_path, num_frames=20):
    """
    Alternative version using OpenCV for rotation (may give better quality)
    """
    # Read the original image
    original_img = cv2.imread(input_image_path, cv2.IMREAD_UNCHANGED)
    if original_img is None:
        raise ValueError(f"Could not load image from {input_image_path}")
    
    frames = []
    
    for frame_num in range(num_frames):
        # Calculate rotation angle
        angle = (frame_num * 360) / num_frames
        
        # Rotate image using OpenCV
        rotated_img = rotate_image_opencv(original_img, angle)
        
        # Convert BGR to RGB for PIL
        if len(rotated_img.shape) == 3:
            rotated_img_rgb = cv2.cvtColor(rotated_img, cv2.COLOR_BGR2RGB)
        else:
            rotated_img_rgb = rotated_img
        
        # Convert to PIL Image
        pil_frame = Image.fromarray(rotated_img_rgb)
        frames.append(pil_frame)
        
        # Save individual frame
        frame_filename = f"opencv_frame_{frame_num:02d}.png"
        pil_frame.save(frame_filename)
        print(f"Created OpenCV frame {frame_num + 1}/{num_frames} (angle: {angle:.1f}°)")
    
    # Create animated GIF
    frames[0].save(
        output_gif_path,
        save_all=True,
        append_images=frames[1:],
        duration=100,
        loop=0,
        optimize=True
    )
    
    print(f"OpenCV rotating animation saved as {output_gif_path}")

# Main execution
if __name__ == "__main__":
    # Configuration
    INPUT_IMAGE = "public/images/radar.png"  # Your radar image path
    OUTPUT_GIF = "public/images/rotating_radar.gif"  # Output GIF path
    NUM_FRAMES = 25  # Number of rotation frames
    
    try:
        print("Starting image rotation animation...")
        print(f"Input: {INPUT_IMAGE}")
        print(f"Output: {OUTPUT_GIF}")
        print(f"Frames: {NUM_FRAMES}")
        print("-" * 50)
        
        # Method 1: Using PIL (recommended for most cases)
        create_rotating_image_animation(INPUT_IMAGE, OUTPUT_GIF, NUM_FRAMES)
        
        # Method 2: Using OpenCV (uncomment if you want to try this method)
        # OUTPUT_GIF_OPENCV = "public/images/rotating_radar_opencv.gif"
        # create_rotating_animation_opencv(INPUT_IMAGE, OUTPUT_GIF_OPENCV, NUM_FRAMES)
        
        print(f"\n✅ Success! Rotating radar animation saved as '{OUTPUT_GIF}'")
        print(f"📊 Animation details:")
        print(f"   - Total frames: {NUM_FRAMES}")
        print(f"   - Rotation per frame: {360/NUM_FRAMES:.1f}°")
        print(f"   - Total duration: {NUM_FRAMES * 0.1:.1f} seconds per loop")
        print(f"   - Frame rate: 10 FPS")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        print("\nTroubleshooting tips:")
        print("1. Make sure your image file exists and the path is correct")
        print("2. Install required packages: pip install opencv-python pillow numpy")
        print("3. Ensure your image is in a supported format (PNG, JPG, etc.)")
        print("4. Check that the output directory exists")

# Quick test function
def test_rotation():
    """
    Test function to verify the rotation works correctly
    """
    print("Testing rotation...")
    test_angles = [0, 45, 90, 135, 180, 225, 270, 315]
    
    try:
        original_img = cv2.imread("public/images/radar.png")
        if original_img is not None:
            for angle in test_angles:
                rotated = rotate_image_opencv(original_img, angle)
                filename = f"test_rotation_{angle}deg.png"
                cv2.imwrite(filename, rotated)
                print(f"Saved test rotation: {filename}")
        else:
            print("Could not load test image")
    except Exception as e:
        print(f"Test failed: {e}")

# Uncomment the line below to run rotation test
# test_rotation()